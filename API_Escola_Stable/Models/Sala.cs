using System.ComponentModel.DataAnnotations;
//ALEXANDRE
namespace API_Uni_Func.Models
{
    public class Sala
    {
        [Key]
        public int? IdSala { get; set; }

        public int? NumeroSala { get; set; }

    }
}