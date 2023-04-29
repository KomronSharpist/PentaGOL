using Microsoft.AspNetCore.Mvc;

namespace PentaGOL.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    //[HttpGet]
    //public IActionResult User()
    //{
    //    return Ok("Salom");
    //}
    [HttpPost(Name = "GetWeatherForecast")]
    public IActionResult Get([FromBody] DateTime dateTime)
    {
        string formattedDateTime = dateTime.ToString("dd.MM.yyyy HH:mm");

        // Return a response with the formatted datetime
        return Ok(formattedDateTime);
    }
}
