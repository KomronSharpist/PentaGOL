using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PentaGOL.Domain.Configurations;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.DTOs.NewsDTOs;
using PentaGOL.Service.Interfaces;

namespace PentaGOL.Api.Controllers;

public class NewsController : BaseController
{
    private readonly INewsService service;

    public NewsController(INewsService service)
    {
        this.service = service;
    }
    [HttpPost, Authorize]
    public async Task<IActionResult> Create(NewsForCreationDto dto)
    {
        return Ok(await this.service.CreateAsync(dto));
    }

    [HttpPut("Id"), Authorize]
    public async Task<IActionResult> Update(NewsForUpdateDto dto)
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
