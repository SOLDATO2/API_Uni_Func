using System.ComponentModel.DataAnnotations;
//FELIPE
namespace API_Uni_Func.Models
{
    public class Aula
    {
        [Key]
        public int IdAula { get; set; }
        public Disciplina? DiciplinaDoDia { get; set; }
        public DateTime DataDiciplina { get; set; }
        public Sala? SalaDeAula { get; set; }
    }
}
