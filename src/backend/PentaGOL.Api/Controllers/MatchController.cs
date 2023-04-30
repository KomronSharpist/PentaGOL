using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PentaGOL.Domain.Configurations;
using PentaGOL.Service.DTOs.MatchDTOs;
using PentaGOL.Service.Interfaces;

namespace PentaGOL.Api.Controllers;

public class MatchController : BaseController
{
    private readonly IMatchService service;

    public MatchController(IMatchService service)
    {
        this.service = service;
    }
    // GetAllByLigaId, GetAllByTime

    [HttpPost, Authorize]
    public async Task<IActionResult> Create(MatchForCreationDto dto)
    {
        return Ok(await this.service.CreateAsync(dto));
    }

    [HttpPut("id"), Authorize]
    public async Task<IActionResult> Update(MatchForUpdateDto dto)
    {
        return Ok(await this.service.UpdateAsync(dto));
    }

    [HttpDelete("id"), Authorize]
    public async Task<IActionResult> Delete(long id)
    {
        return Ok(await this.service.DeleteAsync(id));
    }

    [HttpGet("id")]
    public async Task<IActionResult> GetById(long id)
    {
        return Ok(await this.service.GetByIdAsync(id));
    }
    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] PaginationParams @params)
    {
        return Ok(await this.service.GetAllAsync(@params));
    }
    [HttpPut("status"), Authorize]
    public async Task<IActionResult> ChangeStatus(MatchForFinishDto dto)
    {
        return Ok(await this.service.ChangeStatusAsync(dto.Id, dto));
    }

    [HttpGet("liga-id")]
    public async Task<IActionResult> GetAllByLigaId(PaginationParams @params,long ligaId)
    {
        return Ok(await this.service.GetAllByLigaId(@params, ligaId));
    }
    [HttpGet("by-status")]
    public async Task<IActionResult> GetAllByStatus([FromQuery]PaginationParams @params, long ligaId, bool isEnded)
    {
        return Ok(await this.service.GetAllByStatus(@params, ligaId, isEnded));
    }
}
