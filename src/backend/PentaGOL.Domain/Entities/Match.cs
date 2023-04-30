using PentaGOL.Domain.Commons;
using PentaGOL.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Domain.Entities;

public class Match : Auditable
{
    public DateTime GameDate { get; set; }
    public long LigaId { get; set; }
    public long FirstTeamId { get; set; }
    public long SecondTeamId { get; set; }
    public int FirstTeamScore { get; set; } = 0;
    public int SecondTeamScore { get; set; } = 0; 
    public bool IsEnded { get; set; } = false;
}
