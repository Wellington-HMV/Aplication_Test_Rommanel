using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rommanel.Repository.Repository.Base
{
    interface IRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> GetAll();
        Task<TEntity> GetAsync(Func<TEntity, bool> predicate);
        IQueryable<TEntity> Get(Func<TEntity, bool> predicate);
        TEntity Find(params object[] key);
        void Actualize(TEntity obj);
        void SaveDatabase();
        void AddDataBase(TEntity obj);
        void Delete(Func<TEntity, bool> predicate);
        void Dispose();
    }
}
