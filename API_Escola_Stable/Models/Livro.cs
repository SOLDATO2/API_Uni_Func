using System.ComponentModel.DataAnnotations;
//CHATGPT
namespace API_Uni_Func.Models
{
    public class Livro
    {
        // Propriedade chave primária
        [Key]
        public int IdLivro { get; set; }

        // Propriedade para o título do livro
        public string? Titulo { get; set; }

        // Propriedade para os autores do livro
        public List<Autor>? Autores { get; set; }
    }
}
