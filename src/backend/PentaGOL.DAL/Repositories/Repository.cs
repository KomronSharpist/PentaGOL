using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using PentaGOL.DAL.Contexts;
using PentaGOL.DAL.IRepositories;
using PentaGOL.Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.DAL.Repositories;

public class Repository<TEntity> : IRepository<TEntity> where TEntity : Auditable
{
    protected readonly PentaGolContext dbContext;
    protected readonly DbSet<TEntity> dbSet;
    public Repository(PentaGolContext dbContext)
    {
        this.dbContext = dbContext;
        this.dbSet = dbContext.Set<TEntity>();
    }

    #region Delete
    /// <summary>
    /// Deletes first item that matched expression and keep track of it until change saved
    /// </summary>
    /// <param name="expression"></param>
    /// <returns>true if action is successful, false if unable to delete</returns>
    public async Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> expression)
    {
        var entity = await this.SelectAsync(expression);

        if (entity is not null)
        {
            this.dbSet.Remove(entity);
            return true;
        }

        return false;
    }
    #endregion

    #region Insert
    /// <summary>
    /// Inserts element to a table and keep track of it until change saved
    /// </summary>
    /// <param name="entity"></param>
    /// <returns></returns>
    public async Task<TEntity> InsertAsync(TEntity entity)
    {
        var entry = await this.dbSet.AddAsync(entity);

        return entry.Entity;
    }
    #endregion

    #region Save
    /// <summary>
    /// Saves tracking changes and write them to database permenantly
    /// </summary>
    /// <returns></returns>
    public async Task SaveAsync()
    {
        await dbContext.SaveChangesAsync();
    }
    #endregion

    #region Select All
    /// <summary>
    /// Selects all element of table
    /// </summary>
    /// <returns></returns>
    public IQueryable<TEntity> SelectAll() => this.dbSet;
    #endregion

    #region Select
    /// <summary>
    /// Selects element from a table specified with expression
    /// </summary>
    /// <param name="expression"></param>
    /// <returns></returns>
    public async Task<TEntity> SelectAsync(Expression<Func<TEntity, bool>> expression)
        => await this.dbSet.FirstOrDefaultAsync(expression);
    #endregion
}