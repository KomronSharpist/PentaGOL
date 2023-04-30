using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.MatchDTOs;

public class MatchForFinishDto
{
    public long Id { get; set; }
    public int FirstTeamScore { get; set; }
    public int SecondTeamScore { get; set; }
}
