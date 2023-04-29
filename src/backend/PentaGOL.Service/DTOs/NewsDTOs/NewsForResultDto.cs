using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.NewsDTOs;

public class NewsForResultDto
{
    public long Id { get; set; }
    public string Title { get; set; }
    public string ImagePath { get; set; }
    public string Description { get; set; }
}