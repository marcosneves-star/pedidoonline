using Microsoft.EntityFrameworkCore;
using Pedidos_Online.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pedidos_Online.Configurcao
{
    public class Contexto : DbContext
    {

        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Comandas> Comandas { get; set; }
    }
}
