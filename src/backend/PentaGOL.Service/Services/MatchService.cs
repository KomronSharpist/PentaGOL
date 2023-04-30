using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PentaGOL.DAL.IRepositories;
using PentaGOL.Domain.Configurations;
using PentaGOL.Domain.Entities;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.DTOs.MatchDTOs;
using PentaGOL.Service.DTOs.TeamDTOs;
using PentaGOL.Service.Exceptions;
using PentaGOL.Service.Extensions;
using PentaGOL.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity.SqlServer;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Match = PentaGOL.Domain.Entities.Match;

namespace PentaGOL.Service.Services;

public class MatchService : IMatchService
{
    private readonly IUnitOfWork unitOfWork;
    private readonly IMapper mapper;
    public MatchService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        this.unitOfWork = unitOfWork;
        this.mapper = mapper;
    }
    public async Task<MatchForResultDto> ChangeStatusAsync(long matchId)
    {
        var CheckForExist = await this.unitOfWork.Matchs.SelectAll().FirstOrDefaultAsync(m => m.Id.Equals(matchId));
        if (CheckForExist is null)
            throw new PentaGolExceptions(404, "Match is not found");

        CheckForExist.IsEnded = true;
        await this.unitOfWork.SaveChangesAsync();

        return this.mapper.Map<MatchForResultDto>(CheckForExist);
    }

    public async Task<MatchForResultDto> CreateAsync(MatchForCreationDto dto)
    {
        var CheckForExist = await this.unitOfWork.Matchs.SelectAsync(m => m.FirstTeamId.Equals(dto.FirstTeamId) && m.SecondTeamId.Equals(dto.SecondTeamId) && m.GameDate.Equals(dto.GameDate) && m.GameDate < dto.GameDate.AddHours(2));
        if (CheckForExist is not null)
            throw new PentaGolExceptions(409, "Match is already exist");
        
        var mappedDto = this.mapper.Map<Match>(dto);
        await this.unitOfWork.Matchs.InsertAsync(mappedDto);
        await this.unitOfWork.SaveChangesAsync();

        return this.mapper.Map<MatchForResultDto>(CheckForExist);
    }

    public async Task<bool> DeleteAsync(long id)
    {
        var CheckForExist = await this.unitOfWork.Matchs.SelectAll().FirstOrDefaultAsync(m => m.Id.Equals(id));
        if (CheckForExist is null)
            throw new PentaGolExceptions(404, "Match is not found");

        await this.unitOfWork.Matchs.DeleteAsync(m => m.Id.Equals(id));
        await this.unitOfWork.SaveChangesAsync();

        return true;
    }

    public async Task<List<MatchForResultDto>> GetAllAsync(PaginationParams @params)
    {
        var matchs = await unitOfWork.Matchs.SelectAll()
               .ToPagedList(@params)
               .ToListAsync();

        return this.mapper.Map<List<MatchForResultDto>>(matchs);
    }

    public async Task<MatchForResultDto> GetByIdAsync(long id)
    {
        var liga = await this.unitOfWork.Matchs.SelectAsync(l => l.Id.Equals(id));
        if (liga is null)
            throw new PentaGolExceptions(404, "Match is not found");

        return this.mapper.Map<MatchForResultDto>(liga);
    }

    public async Task<List<MatchForResultDto>> GetAllByLigaId(PaginationParams @params, long ligaId)
    {
        var Match = await this.unitOfWork.Matchs
            .SelectAll()
            .Where(t => t.LigaId.Equals(ligaId))
            .OrderBy(t => t.GameDate.ToString("dd.MM.yyyy HH:mm"))
            .ToPagedList(@params)
            .ToListAsync();

        return this.mapper.Map<List<MatchForResultDto>>(Match);
    }

    public async Task<List<MatchForResultDto>> GetAllByStatus(PaginationParams @params, long ligaId, bool isEnded)
    {
        if (isEnded)
        {
            var OlMatches = await this.unitOfWork.Matchs
            .SelectAll()
            .Where(t => t.LigaId.Equals(ligaId) && t.IsEnded == true)
            .ToPagedList(@params)
            .ToListAsync();

            await this.unitOfWork.SaveChangesAsync();
            return this.mapper.Map<List<MatchForResultDto>>(OlMatches);
        }
        var upCommingMatches = await this.unitOfWork.Matchs
            .SelectAll()
            .Where(t => t.LigaId.Equals(ligaId) && t.IsEnded == false)
            .ToPagedList(@params)
            .ToListAsync();

        return this.mapper.Map<List<MatchForResultDto>>(upCommingMatches);
    }
    public async Task<MatchForResultDto> UpdateAsync(MatchForUpdateDto dto)
    {
        var CheckForExist = await this.unitOfWork.Matchs.SelectAsync(l => l.Id.Equals(dto.Id));
        if (CheckForExist is null)
            throw new PentaGolExceptions(404, "Match for update not found");

        var mappedDto = this.mapper.Map(dto, CheckForExist);
        mappedDto.UpdatedAt = DateTime.UtcNow;
        await this.unitOfWork.SaveChangesAsync();

        return this.mapper.Map<MatchForResultDto>(mappedDto);
    }

    public async Task<MatchForResultDto> ChangeStatusAsync(long matchId, MatchForFinishDto dto)
    {
        var match = await this.unitOfWork.Matchs.SelectAsync(m => m.Id.Equals(dto.Id));
        if (match is null)
            throw new PentaGolExceptions(404, "Match is not found");

        match.UpdatedAt = DateTime.UtcNow;
        match.FirstTeamScore = dto.FirstTeamScore;
        match.SecondTeamId = dto.SecondTeamScore;
        match.IsEnded = true;

        await this.unitOfWork.SaveChangesAsync();

        return this.mapper.Map<MatchForResultDto>(match);
    }
}
