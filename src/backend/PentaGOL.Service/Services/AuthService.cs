using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PentaGOL.Service.Exceptions;
using PentaGOL.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Services;

public class AuthService : IAuthService
{
    private readonly IConfiguration configuration;

    public AuthService(IConfiguration configuration)
    {
        this.configuration = configuration;
    }
    public async Task<string> AuthenticateAsync(string email, string password)
    {
        if(email == "komrondeveloper@gmail.com" && password == "komronbek26")
        {
            var Token = GenerateToken(email, password);
            return Token.ToString();
        }
        throw new PentaGolExceptions(400, "Email or password is incorrect");
    }
    private string GenerateToken(string username, string password)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var tokenKey = Encoding.UTF8.GetBytes(configuration["JWT:Key"]);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                 new Claim(ClaimTypes.Name, username)
            }),
            Audience = configuration["JWT:Audience"],
            Issuer = configuration["JWT:Issuer"],
            IssuedAt = DateTime.UtcNow,
            Expires = DateTime.UtcNow.AddMinutes(double.Parse(configuration["JWT:Expire"])),
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
