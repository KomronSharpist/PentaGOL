using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.NewsDTOs;

public class NewsForCreationDto
{
    [Required, MinLength(10), MaxLength(200)]
    public string Title { get; set; }
    public string ImagePath { get; set; } 
    [Required, MinLength(20)]
    public string Description { get; set; }
}
