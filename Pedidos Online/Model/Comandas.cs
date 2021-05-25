using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Pedidos_Online.Model
{
    [Table("Comandas")]
    public class Comandas
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("PrEscolhido")]
        public string PrEscolhido { get; set; }

        [Column("PrQuantidade")]
        public int PrQuantidade { get; set; }

        [Column("BebEscolhido")]
        public string BebEscolhido { get; set; }

        [Column("BebQuantidade")]
        public int BebQuantidade { get; set; }

        [Column("SMesa")]
        public string SMesa { get; set; }

        [Column("SNome")]
        public string SNome { get; set; }
    }
}
