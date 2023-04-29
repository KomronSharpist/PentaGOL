using PentaGOL.Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.DAL.IRepositories;

public interface IRepository<TEntity> where TEntity : Auditable
{
    Task<TEntity> InsertAsync(TEntity entity);
    IQueryable<TEntity> SelectAll();
    Task<TEntity> SelectAsync(Expression<Func<TEntity, bool>> expression);
    Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> expression);
    Task SaveAsync();
}
