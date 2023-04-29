using Microsoft.AspNetCore.Mvc;
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
    public async Task<IActionResult> AuthenticateAsync(string email, string password)
    {
        return Ok(await this.authService.AuthenticateAsync(email, password));
    }
}
