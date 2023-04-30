using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.TeamDTOs;

public class TeamForCreationDto
{
    [Required]
    public string Name { get; set; }
    public string ImagePath { get; set; } = "https://mtbdata.com/images/default-team2.png";
    [Required]
    public long LigaId { get; set; }
    public int TotalGame { get; set; } = 0;
    public int TotalScore { get; set; } = 0;
}
