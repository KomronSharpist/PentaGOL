using PentaGOL.Domain.Configurations;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.DTOs.MatchDTOs;
using PentaGOL.Service.DTOs.TeamDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Interfaces;

public interface IMatchService
{
    Task<MatchForResultDto> CreateAsync(MatchForCreationDto dto);
    Task<MatchForResultDto> UpdateAsync(MatchForUpdateDto dto);
    Task<bool> DeleteAsync(long id);
    Task<MatchForResultDto> GetByIdAsync(long id);
    Task<List<MatchForResultDto>> GetAllAsync(PaginationParams @params);
    Task<MatchForResultDto> ChangeStatusAsync(long matchId, MatchForFinishDto dto);
    Task<List<MatchForResultDto>> GetAllByLigaId(PaginationParams @params, long ligaId);
    Task<List<MatchForResultDto>> GetAllByStatus(PaginationParams @params, long ligaId, bool isEnded);
}
