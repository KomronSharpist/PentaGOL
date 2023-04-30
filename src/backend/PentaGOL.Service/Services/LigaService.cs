using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PentaGOL.DAL.IRepositories;
using PentaGOL.Domain.Configurations;
using PentaGOL.Domain.Entities;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.Exceptions;
using PentaGOL.Service.Extensions;
using PentaGOL.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Services;

public class LigaService : ILigaService
{
    private readonly IUnitOfWork unitOfWork;
    private readonly IMapper mapper;
    public LigaService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        this.unitOfWork = unitOfWork;
        this.mapper = mapper;
    }
    public async Task<LigaForResultDto> CreateAsync(LigaForCreationDto dto)
    {
        var CheckForExits = this.unitOfWork.Ligas.SelectAsync(l => l.Name.Equals(dto.Name));
        if(CheckForExits.Result is not null)
            throw new PentaGolExceptions(409, "Liga is already exist");

        var mappedDto = this.mapper.Map<Liga>(dto);
        await this.unitOfWork.Ligas.InsertAsync(mappedDto);
        await this.unitOfWork.SaveChangesAsync();

        var result = this.mapper.Map<LigaForResultDto>(mappedDto);
        
        return result;
    }

    public async Task<bool> DeleteAsync(long id)
    {
        var CheckForExist = await this.unitOfWork.Ligas.SelectAll().FirstOrDefaultAsync(l => l.Id.Equals(id));
        if(CheckForExist is null)
            throw new PentaGolExceptions(404, "Liga is not found");
        
        await this.unitOfWork.Ligas.DeleteAsync(l => l.Id.Equals(id));
        await this.unitOfWork.SaveChangesAsync();

        return true;
    }

    public async Task<List<LigaForResultDto>> GetAllAsync(PaginationParams @params)
    {
        var ligas = await unitOfWork.Ligas.SelectAll()
                .ToPagedList(@params)
                .ToListAsync();

        return this.mapper.Map<List<LigaForResultDto>>(ligas);
    }

    public async Task<LigaForResultDto> GetByIdAsync(long id)
    {
        var liga = await this.unitOfWork.Ligas.SelectAsync(l => l.Id.Equals(id));
        if (liga is null)
            throw new PentaGolExceptions(404, "Liga is not found");

        return this.mapper.Map<LigaForResultDto>(liga);
    }

    public async Task<LigaForResultDto> UpdateAsync(LigaForCreationDto dto, long id)
    {
        var CheckForExist = await this.unitOfWork.Ligas.SelectAsync(l => l.Id.Equals(id));
        if (CheckForExist is null)
            throw new PentaGolExceptions(404, "Liga for update not found");

        var mappedDto = this.mapper.Map(dto,CheckForExist);
        mappedDto.UpdatedAt = DateTime.UtcNow;
        await this.unitOfWork.SaveChangesAsync();

        return this.mapper.Map<LigaForResultDto>(mappedDto);
    }
}
