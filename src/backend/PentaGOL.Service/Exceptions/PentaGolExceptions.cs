using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Exceptions;

public class PentaGolExceptions : Exception
{
    public int Code { get; set; }
    public PentaGolExceptions(int code, string message)
        : base(message)
    {
        this.Code = code;
    }
}
