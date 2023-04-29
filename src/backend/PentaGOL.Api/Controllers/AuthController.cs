using Microsoft.AspNetCore.Mvc;

namespace PentaGOL.Api.Controllers;

public class AuthController : BaseController
{
    [HttpGet(Name = "GetUser")]
    public IActionResult GetUser(string username)
    {
        return Ok(username);
    }
}
