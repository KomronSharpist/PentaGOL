using PentaGOL.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.MatchDTOs;

public class MatchForCreationDto
{
    [Required]
    public long LigaId { get; set; }
    [Required]
    public DateTime GameDate { get; set; }
    [Required]
    public long FirstTeamId { get; set; }
    [Required]
    public long SecondTeamId { get; set; }
}
