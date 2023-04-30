using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Extensions;

public static class CommonExtension
{
    public static byte[] ToByteArray(this IFormFile file)
    {
        using var memoryStream = new MemoryStream();
        using var fileStream = file.OpenReadStream();
        fileStream.Seek(0, SeekOrigin.Begin);
        fileStream.CopyTo(memoryStream);
        return memoryStream.ToArray();
    }
}
