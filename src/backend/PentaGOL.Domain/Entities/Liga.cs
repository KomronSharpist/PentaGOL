﻿using PentaGOL.Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Domain.Entities;

public class Liga : Auditable
{
    public string Name { get; set; }
    public string ImagePath { get; set; }
}
