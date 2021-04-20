using Microsoft.AspNetCore.Http;
using Rommanel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Rommanel.Repository.RepositoryMap.RepositoryMap;

namespace Rommanel.Service
{
    public class RegisterService
    {
        private static readonly AddressRepository _Address = new AddressRepository();
        private static readonly RegisterRepository _Register = new RegisterRepository();

        public static async Task<List<RegisterViewModel>> GetRegisterAllAsync()
        {
            List<RegisterViewModel> rvmList = new List<RegisterViewModel>();

            var registers = _Register.GetAll().ToList();
            registers.ForEach(f =>
             rvmList.Add( new RegisterViewModel() {
                 Address = _Address.GetAsync(new Func<Address, bool>((x) => x.IdRecord == f.Id)).Result,
                 Register = f
             })
            );

            return rvmList;
        }

        /// <summary>
        /// Metodo para capturar o registro realizado noo banco
        /// </summary>
        /// <param name="login"></param>
        /// <returns>o Registro com os dados onformados</returns>
        public static async Task<Register> GetRegisterAsync(LoginDto login)
        {
            return _Register.GetWhereAsync(new Func<Register, bool>((x) => x.CpfCnpj == login.CpfCnpj && x.Email == login.Email)).Result.FirstOrDefault();
        }

        /// <summary>
        /// Metodo para criar um registro
        /// </summary>
        /// <param name="form"></param>
        /// <returns>o Registro criado completo com seus repectivos ids</returns>
        public static async Task<RegisterViewModel> Register(RegisterViewModel form)
        {
            var dbRegister = await _Register.GetWhereAsync(new Func<Register, bool>((x) => x.CpfCnpj == form.Register.CpfCnpj && x.Email == form.Register.Email));

            if (dbRegister.Count().Equals(0))
            {
                _Register.AddDataBase(form.Register);

                form.Register = _Register.GetWhereAsync(new Func<Register, bool>((x) => x.CpfCnpj == form.Register.CpfCnpj && x.Email == form.Register.Email)).Result.FirstOrDefault();

                form.Address.IdRecord = form.Register.Id;

                _Address.AddDataBase(form.Address);

                form.Address = _Address.GetWhereAsync(new Func<Address, bool>((x) => x.IdRecord == form.Register.Id)).Result.FirstOrDefault();

                return form;
            }

            return null;
        }

        /// <summary>
        /// Metodo para remover um registro criado
        /// </summary>
        /// <param name="id"></param>
        /// <returns>se foi realizado com sucesso a exclusão do registro</returns>
        public static dynamic Remove(int id)
        {
            try
            {
                _Address.Delete(new Func<Address, bool>((x) => x.IdRecord == id));
                _Address.SaveDatabase();

                _Register.Delete(new Func<Register, bool>((x) => x.Id == id));
                _Register.SaveDatabase();

                return StatusCodes.Status200OK;
            }
            catch (Exception)
            {
                return StatusCodes.Status400BadRequest;
            }
        }
    }
}
