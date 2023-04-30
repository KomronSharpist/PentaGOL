using PentaGOL.DAL.Contexts;
using PentaGOL.DAL.IRepositories;
using PentaGOL.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly PentaGolContext dbContext;

        public UnitOfWork(PentaGolContext dbContext)
        {
            this.dbContext = dbContext;

            Matchs = new Repository<Match>(dbContext);
            Teams = new Repository<Team>(dbContext);
            Ligas = new Repository<Liga>(dbContext);
            News = new Repository<News>(dbContext);

        }

        public IRepository<Match> Matchs { get; private set; }
        public IRepository<Team> Teams { get; private set; }
        public IRepository<Liga> Ligas { get; private set; }
        public IRepository<News> News { get; private set; }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await dbContext.SaveChangesAsync() > 0;
        }
    }
}
