using Rommanel.Entities;
using Rommanel.Repository.Repository.Base;

namespace Rommanel.Repository.RepositoryMap
{
    public class RepositoryMap
    {
        public class AddressRepository : Repository<Address> { }

        public class RegisterRepository : Repository<Register> { }
    }
}
