using System.ComponentModel.DataAnnotations;
//FELIPE
namespace API_Uni_Func.Models
{
    public class Aula
    {
        [Key]
        public int IdAula { get; set; }
        public int IdDisciplina {get; set; }
        public Disciplina? DiciplinaDoDia { get; set; }
        public DateTime DataDiciplina { get; set; }
        public int IdSala {get; set; }
        public Sala? SalaDeAula { get; set; }

        public int CronogramaId { get; set; }
        public Cronograma? Cronograma {get; set;} 
    }
}
