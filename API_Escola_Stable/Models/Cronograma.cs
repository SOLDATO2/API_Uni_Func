using System.ComponentModel.DataAnnotations;
//ALEXANDRE
namespace API_Uni_Func.Models
{
    public class Cronograma
    {
        [Key]
        public int CronogramaId { get; set; }
        public List<Aula>? Aulas { get; set; }
    }
}
