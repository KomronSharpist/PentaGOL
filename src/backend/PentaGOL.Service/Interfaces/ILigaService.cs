using PentaGOL.Domain.Configurations;
using PentaGOL.Service.DTOs.LigaDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Interfaces;

public interface ILigaService
{
    Task<LigaForResultDto> CreateAsync(LigaForCreationDto dto);
    Task<LigaForResultDto> UpdateAsync(LigaForUpdateDto dto);
    Task<bool> DeleteAsync(long id);
    Task<LigaForResultDto> GetByIdAsync(long id);
    Task<List<LigaForResultDto>> GetAllAsync(PaginationParams @params);
}
