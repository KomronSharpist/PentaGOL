using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.LigaDTOs;
public class LigaForUpdateDto
{
    [Required]
    public long Id { get; set; }
    public string Name { get; set; }
    public string ImagePath { get; set; }
}
