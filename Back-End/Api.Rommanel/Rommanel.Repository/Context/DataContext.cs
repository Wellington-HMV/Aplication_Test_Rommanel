using Microsoft.EntityFrameworkCore;
using Rommanel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rommanel.Repository.Context
{
    public class DataContext : DbContext
    {
        public DataContext(){}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server= localhost; Database= rommanel_bd; Integrated Security=True;");
            //optionsBuilder.UseSqlServer("server=DESKTOP-GDT0IA8\\SQLEXPRESS; user id=developer; password=developer; initial catalog=TeamWork;");
        }


        public DbSet<Address> Adresses { get; set; }
        public DbSet<Register> Registers { get; set; }
    }
}
