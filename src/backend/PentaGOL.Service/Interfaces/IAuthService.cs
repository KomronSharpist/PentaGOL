using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Interfaces;  

public interface IAuthService
{
    Task<string> AuthenticateAsync(string email, string password);
}
