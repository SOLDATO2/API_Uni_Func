using System.ComponentModel.DataAnnotations; 
//FELIPE
namespace API_Uni_Func.Models
{
    public class Estudante
    {
        [Key]
        public int? IdEstudante { get; set; }
        public string? Nome { get; set; }
        public int? Idade { get; set; }
        
        
    }
}
