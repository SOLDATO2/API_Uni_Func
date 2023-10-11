using System.ComponentModel.DataAnnotations;
//FELIPE
namespace API_Escola_Stable.Models
{
    public class Autor
    {
       
        [Key]
        public int? AutorId { get; set; }
        public string? Nome { get; set; }
    }
}
