using System.ComponentModel.DataAnnotations;
//ALEXANDRE
namespace API_Escola_Stable.Models
{
    public class Sala
    {
        [Key]
        public int? IdSala { get; set; }

        public int? NumeroSala { get; set; }

    }
}