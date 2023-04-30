using Microsoft.AspNetCore.Mvc;
using PentaGOL.Api.Models;
using PentaGOL.Service.Interfaces;

namespace PentaGOL.Api.Controllers;

public class AuthController : BaseController
{
    private readonly IAuthService authService;

    public AuthController(IAuthService authService)
    {
        this.authService = authService;
    }
    [HttpPost("authenticate")]
    public async Task<IActionResult> AuthenticateAsync(Admin admin)
    {
        return Ok(new Response()
        {
            Code = 200,
            Error = "Succes",
            Data = await this.authService.AuthenticateAsync(admin.Email, admin.Password)
        });
    }
}
