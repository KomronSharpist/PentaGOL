using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PentaGOL.DAL.IRepositories;
using PentaGOL.Domain.Configurations;
using PentaGOL.Domain.Entities;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.DTOs.TeamDTOs;
using PentaGOL.Service.Exceptions;
using PentaGOL.Service.Extensions;
using PentaGOL.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Services;

public class TeamService : ITeamService
{
    private readonly IUnitOfWork unitOfWork;
    private readonly IMapper mapper;
    public TeamService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        this.unitOfWork = unitOfWork;
        this.mapper = mapper;
    }
    public async Task<TeamForResultDto> CreateAsync(TeamForCreationDto dto)
    {
        var CheckForExits = this.unitOfWork.Teams.SelectAsync(l => l.Name.Equals(dto.Name));
        if (CheckForExits.Result is not null)
            throw new PentaGolExceptions(409, "Team is already exist");

        var mappedDto = this.mapper.Map<Team>(dto);
        await this.unitOfWork.Teams.InsertAsync(mappedDto);
        await this.unitOfWork.SaveChangesAsync();

        var result = this.mapper.Map<TeamForResultDto>(mappedDto);

        return result;
    }

    public async Task<bool> DeleteAsync(long id)
    {
        var CheckForExist = await this.unitOfWork.Teams.SelectAsync(l => l.Id.Equals(id));
        if (CheckForExist is null)
            throw new PentaGolExceptions(404, "Team is not found");

        await this.unitOfWork.Teams.DeleteAsync(l => l.Id.Equals(id));
        await this.unitOfWork.SaveChangesAsync();

        return true;
    }

    public async Task<List<TeamForResultDto>> GetAllAsync(PaginationParams @params)
    {
        var teams = await this.unitOfWork.Teams.SelectAll()
                 .ToPagedList(@params)
                 .ToListAsync();

        return this.mapper.Map<List<TeamForResultDto>>(teams);
    }

    public async Task<List<TeamForResultDto>> GetAllByLigaIdAsync(PaginationParams @params, long ligaId)
    {
        var teams = await this.unitOfWork.Teams.SelectAll()
                 .Where(t => t.LigaId.Equals(ligaId))
                 .ToPagedList(@params)
                 .OrderByDescending(t => t.TotalScore)
                 .ThenByDescending(t => t.TotalGame)
                 .ToListAsync();

        return this.mapper.Map<List<TeamForResultDto>>(teams);
    }

    public async Task<TeamForResultDto> GetByIdAsync(long id)
    {
        var team = await this.unitOfWork.Teams.SelectAsync(l => l.Id.Equals(id));
        if (team is null)
            throw new PentaGolExceptions(404, "Team is not found");

        return this.mapper.Map<TeamForResultDto>(team);
    }

    public async Task<TeamForResultDto> UpdateAsync(TeamForUpdateDto dto)
    {
        var CheckForExist = await this.unitOfWork.Teams.SelectAsync(l => l.Id.Equals(dto.Id));
        if (CheckForExist is null)
            throw new PentaGolExceptions(404, "Team for update not found");

        var mappedDto = this.mapper.Map(dto, CheckForExist);
        mappedDto.UpdatedAt = DateTime.UtcNow;
        await this.unitOfWork.SaveChangesAsync();

        return this.mapper.Map<TeamForResultDto>(mappedDto);
    }
}
