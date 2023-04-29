using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.TeamDTOs;

public class TeamForResultDto
{
    public long Id { get; set; }
    public string Name { get; set; }
    public string ImagePath { get; set; }
    public long LigaId { get; set; }
    public int TotalGame { get; set; }
    public int TotalScore { get; set; }
}
