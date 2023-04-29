using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PentaGOL.DAL.IRepositories;
using PentaGOL.Domain.Configurations;
using PentaGOL.Domain.Entities;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.DTOs.NewsDTOs;
using PentaGOL.Service.Exceptions;
using PentaGOL.Service.Extensions;
using PentaGOL.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Services;

public class NewsService : INewsService
{
    private readonly IUnitOfWork unitOfWork;
    private readonly IMapper mapper;
    public NewsService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        this.unitOfWork = unitOfWork;
        this.mapper = mapper;
    }
    public async Task<NewsForResultDto> CreateAsync(NewsForCreationDto dto)
    {
        var CheckForExits = this.unitOfWork.News.SelectAll().FirstOrDefaultAsync(l => l.Title.Equals(dto.Title));
        if (CheckForExits is not null)
            throw new PentaGolExceptions(409, "News is already exist");

        var mappedDto = this.mapper.Map<News>(dto);
        await this.unitOfWork.News.InsertAsync(mappedDto);
        await this.unitOfWork.SaveChangesAsync();

        var result = this.mapper.Map<NewsForResultDto>(mappedDto);

        return result;
    }

    public async Task<bool> DeleteAsync(long id)
    {
        var CheckForExist = await this.unitOfWork.News.SelectAll().FirstOrDefaultAsync(l => l.Id.Equals(id));
        if (CheckForExist is null)
            throw new PentaGolExceptions(404, "News is not found");

        await this.unitOfWork.News.DeleteAsync(l => l.Id.Equals(id));
        await this.unitOfWork.SaveChangesAsync();

        return true;
    }

    public async Task<List<NewsForResultDto>> GetAllAsync(PaginationParams @params)
    {
        var news = await unitOfWork.News.SelectAll()
                .OrderBy(n => n.CreatedAt)
                .ToPagedList(@params)
                .ToListAsync();

        return this.mapper.Map<List<NewsForResultDto>>(news);
    }

    public async Task<NewsForResultDto> GetByIdAsync(long id)
    {
        var liga = await this.unitOfWork.News.SelectAsync(l => l.Id.Equals(id));
        if (liga is null)
            throw new PentaGolExceptions(404, "News is not found");

        return this.mapper.Map<NewsForResultDto>(liga);
    }

    public async Task<NewsForResultDto> UpdateAsync(NewsForCreationDto dto, long id)
    {
        var CheckForExist = await this.unitOfWork.News.SelectAsync(l => l.Id.Equals(id));
        if (CheckForExist is null)
            throw new PentaGolExceptions(404, "News for update not found");

        var mappedDto = this.mapper.Map(dto, CheckForExist);
        mappedDto.UpdatedAt = DateTime.UtcNow;
        await this.unitOfWork.SaveChangesAsync();

        return this.mapper.Map<NewsForResultDto>(mappedDto);
    }
}
