using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.TeamDTOs
{
    public class TeamForUpdateDto
    {
        [Required]
        public long Id { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
        [Required]
        public long LigaId { get; set; }

    }
}
