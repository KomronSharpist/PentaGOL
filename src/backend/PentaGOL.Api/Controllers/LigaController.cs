using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PentaGOL.Api.Models;
using PentaGOL.Domain.Configurations;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.Interfaces;

namespace PentaGOL.Api.Controllers;

public class LigaController : BaseController
{
    private readonly ILigaService service;

    public LigaController(ILigaService service)
    {
        this.service = service;
    }

    [HttpPost, Authorize] 
    public async Task<IActionResult> Create(LigaForCreationDto dto)
    {
        return Ok(await this.service.CreateAsync(dto));
    }

    [HttpPut("Id"), Authorize]
    public async Task<IActionResult> Update(LigaForUpdateDto dto)
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
}
