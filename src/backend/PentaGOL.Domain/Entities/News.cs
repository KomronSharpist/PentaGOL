using PentaGOL.Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Domain.Entities;
public class News : Auditable
{
    public string Title { get; set; }
    public string ImagePath { get; set; }
    public string Description { get; set; }
}

