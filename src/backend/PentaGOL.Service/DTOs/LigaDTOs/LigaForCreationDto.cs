﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PentaGOL.Service.DTOs.LigaDTOs;

public class LigaForCreationDto
{
    [Required]
    public string Name { get; set; }
    public string ImagePath { get; set; } 
}
