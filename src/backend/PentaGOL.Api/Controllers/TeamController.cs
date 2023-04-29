using Microsoft.AspNetCore.Mvc;

namespace PentaGOL.Api.Controllers;

public class TeamController : BaseController
{
    public IActionResult Index()
    {
        return View();
    }
}
