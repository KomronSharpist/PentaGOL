using PentaGOL.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.MatchDTOs
{
    public class MatchForUpdateDto
    {
        [Required]
        public long Id { get; set; }
        public long LigaId { get; set; }
        public DateTime GameDate { get; set; }
        public long FirstTeamId { get; set; }
        public long SecondTeamId { get; set; }
    }
}
