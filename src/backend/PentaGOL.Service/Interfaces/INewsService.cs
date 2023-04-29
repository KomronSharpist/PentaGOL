using PentaGOL.Domain.Configurations;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.DTOs.NewsDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Interfaces;

public interface INewsService
{
    Task<NewsForResultDto> CreateAsync(NewsForCreationDto dto);
    Task<NewsForResultDto> UpdateAsync(NewsForCreationDto dto, long id);
    Task<bool> DeleteAsync(long id);
    Task<NewsForResultDto> GetByIdAsync(long id);
    Task<List<NewsForResultDto>> GetAllAsync(PaginationParams @params);
}
