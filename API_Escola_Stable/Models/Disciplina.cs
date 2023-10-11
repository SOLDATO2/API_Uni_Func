using System.ComponentModel.DataAnnotations;
//ALEXANDRE
namespace API_Escola_Stable.Models
{
    public class Disciplina
    {
        [Key]
        public int? IdDisciplina { get; set; }

        public string? NomeDiciplina { get; set; }

        public int? CargaHoraria { get; set; }
        
        public Professor? ProfessorResponsavel { get; set; }

    }

}