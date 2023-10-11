using System.ComponentModel.DataAnnotations;
//GABRIEL
namespace API_Uni_Func.Models
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
