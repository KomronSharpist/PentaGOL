using Microsoft.AspNetCore.Mvc;

namespace PentaGOL.Api.Controllers;

public class AuthController : BaseController
{
    public IActionResult Index()
    {
        return View();
    }
}
