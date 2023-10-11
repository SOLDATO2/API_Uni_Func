using System.ComponentModel.DataAnnotations;
//FELIPE
namespace API_Escola_Stable.Models
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
