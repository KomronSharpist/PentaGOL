using PentaGOL.Domain.Configurations;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.DTOs.TeamDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Interfaces;

public interface ITeamService
{
    Task<TeamForResultDto> CreateAsync(TeamForCreationDto dto);
    Task<TeamForResultDto> UpdateAsync(TeamForCreationDto dto, long id);
    Task<bool> DeleteAsync(long id);
    Task<TeamForResultDto> GetByIdAsync(long id);
    Task<List<TeamForResultDto>> GetAllAsync(PaginationParams @params);
    Task<List<TeamForResultDto>> GetAllByLigaIdAsync(PaginationParams @params);
}
