using System.ComponentModel.DataAnnotations;
//CHATGPT
// Classe Professor
namespace API_Uni_Func.Models
{
    public class Professor
    {

        // Propriedade chave primária
        [Key] 
        public int? IdProfessor { get; set; }

        // Propriedade para o nome do professor
        public string? NomeProfessor { get; set; }
        // Propriedade para a especialização do professor
        public string? Especializacao { get; set; }
        
    }
}
