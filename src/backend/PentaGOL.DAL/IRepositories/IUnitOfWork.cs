using PentaGOL.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.DAL.IRepositories;

public interface IUnitOfWork : IDisposable
{
    IRepository<Match> Matchs { get; }
    IRepository<Liga> Ligas { get; }
    IRepository<News> News { get; }
    IRepository<Team> Teams { get; }
    Task<bool> SaveChangesAsync();
}
