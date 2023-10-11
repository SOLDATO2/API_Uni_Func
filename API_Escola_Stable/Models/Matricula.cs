using System.ComponentModel.DataAnnotations;
//GRABRIEL
namespace API_Escola_Stable.Models
{
    public class Matricula
    {
        [Key]
        public int IdMatricula { get; set; }
        public Estudante? EstudanteMatriculado {  get; set; }
        public Curso? CursoMatriculado { get; set; }
        public DateTime? DataMatricula { get; set; }
        public bool MatriculaAtiva {  get; set; }
        public Cronograma? CronogramasEstudante { get; set; }
    }
}
