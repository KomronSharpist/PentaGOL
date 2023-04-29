using Microsoft.EntityFrameworkCore;
using PentaGOL.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.DAL.Contexts;

public class PentaGolContext : DbContext
{
    public DbSet<Liga> Ligas { get; set; }
    public DbSet<Match> Matchs { get; set; }
    public DbSet<News> News { get; set; }
    public DbSet<Team> Teams { get; set; }
    public PentaGolContext(DbContextOptions<PentaGolContext> options)
            : base(options)
    {

    }
}
