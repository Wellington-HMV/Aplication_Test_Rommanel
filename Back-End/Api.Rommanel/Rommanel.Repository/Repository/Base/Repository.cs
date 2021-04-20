using Microsoft.EntityFrameworkCore;
using Rommanel.Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rommanel.Repository.Repository.Base
{
    public abstract class Repository<TEntity> : IDisposable,
        IRepository<TEntity> where TEntity : class
    {
        readonly DataContext ctx = new DataContext();

        public IQueryable<TEntity> GetAll()
        {
            return ctx.Set<TEntity>().AsNoTracking();
        }

        public async Task<TEntity> GetAsync(Func<TEntity, bool> predicate)
        {
            return GetAll().Where(predicate).AsQueryable().FirstOrDefault();
        }

        public async Task<IEnumerable<TEntity>> GetWhereAsync(Func<TEntity, bool> predicate)
        {
            return ctx.Set<TEntity>().AsNoTracking().Where(predicate).ToList().AsEnumerable();
        }

        public IQueryable<TEntity> Get(Func<TEntity, bool> predicate)
        {
            return GetAll().Where(predicate).AsQueryable();
        }

        public TEntity Find(params object[] key)
        {
            return ctx.Set<TEntity>().Find(key);
        }

        public void Actualize(TEntity obj)
        {
            ctx.Entry(obj).State = EntityState.Detached;
            ctx.Entry(obj).State = EntityState.Modified;
            SaveDatabase();
        }

        public void SaveDatabase()
        {
            ctx.SaveChanges();
        }

        public void AddDataBase(TEntity obj)
        {
            ctx.Set<TEntity>().Add(obj);
            SaveDatabase();
        }

        public void Delete(Func<TEntity, bool> predicate)
        {
            ctx.Set<TEntity>()
                .Where(predicate).ToList()
                .ForEach(del => ctx.Set<TEntity>().Remove(del));            
        }

        public void Dispose()
        {
            ctx.Dispose();
        }
    }
}
