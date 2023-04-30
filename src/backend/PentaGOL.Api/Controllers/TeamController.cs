using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PentaGOL.Domain.Configurations;
using PentaGOL.Service.DTOs.NewsDTOs;
using PentaGOL.Service.DTOs.TeamDTOs;
using PentaGOL.Service.Interfaces;

namespace PentaGOL.Api.Controllers;

public class TeamController : BaseController
{
    private readonly ITeamService service;

    public TeamController(ITeamService service)
    {
        this.service = service;
    }
    [HttpPost, Authorize]
    public async Task<IActionResult> Create(TeamForCreationDto dto)
    {
        return Ok(await this.service.CreateAsync(dto));
    }

    [HttpPut("Id"), Authorize]
    public async Task<IActionResult> Update(TeamForUpdateDto dto)
    {
        return Ok(await this.service.UpdateAsync(dto));
    }

    [HttpDelete("Id"), Authorize]
    public async Task<IActionResult> Delete(long id)
    {
        return Ok(await this.service.DeleteAsync(id));
    }

    [HttpGet("Id")]
    public async Task<IActionResult> Get(long id)
    {
        return Ok(await this.service.GetByIdAsync(id));
    }

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] PaginationParams @params)
    {
        return Ok(await this.service.GetAllAsync(@params));
    }
    [HttpGet("ligaId")]
    public async Task<IActionResult> GetAllByLigaId([FromQuery] PaginationParams @params, long ligaId)
    {
        return Ok(await this.service.GetAllByLigaIdAsync(@params, ligaId));
    }
}
