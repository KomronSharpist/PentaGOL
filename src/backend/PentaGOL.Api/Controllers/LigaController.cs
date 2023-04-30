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

    [HttpPost(Name = "create")] 
    public async Task<IActionResult> Create(LigaForCreationDto dto)
    {
        return Ok(await this.service.CreateAsync(dto));
    }

    [HttpPost("update")]
    public async Task<IActionResult> Update(long id, LigaForCreationDto dto)
    {
        return Ok(await this.service.UpdateAsync(dto, id));
    }

    [HttpDelete("delete")]
    public async Task<IActionResult> Delete(long id)
    {
        return Ok(await this.service.DeleteAsync(id));
    }

    [HttpGet("get")]
    public async Task<IActionResult> Get(long id)
    {
        return Ok(await this.service.GetByIdAsync(id));
    }

    [HttpGet("getall")]
    public async Task<IActionResult> GetAll([FromQuery] PaginationParams @params)
    {
        return Ok(await this.service.GetAllAsync(@params));
    }
}
