using System.ComponentModel.DataAnnotations;
//FELIPE
namespace API_Uni_Func.Models
{
    public class Autor
    {
       
        [Key]
        public int? AutorId { get; set; }
        public string? Nome { get; set; }
    }
}
