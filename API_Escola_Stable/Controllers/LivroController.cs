using API_Escola_Stable.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Escola_Stable.Data;
//CHATGPT
namespace API_Escola_Stable.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LivroController : ControllerBase
    {
        private UniDbContext _context;

        public LivroController(UniDbContext context)
        {
            _context = context;
        }

      
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar(Livro livro)
        {
            // Adiciona o livro ao contexto do banco de dados
            _context.Add(livro);

            // Salva as alterações no banco de dados
            _context.SaveChanges();

            // Retorna um código 201 (Created) junto com o livro cadastrado
            return Created("", livro);
        }


        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Livro>>> Listar()
        {
            // Obtém todos os livros da tabela "Livros" no banco de dados de forma assíncrona
            var livros = await _context.Livro.ToListAsync();

            // Retorna uma resposta HTTP com a lista de livros
            return Ok(livros);
        }


        [HttpGet("{LivroId}")]
        public async Task<ActionResult<Livro>> BuscarPorId(int IdLivro)
        {
            // Busca um livro pelo ID no banco de dados de forma assíncrona
            var livro = await _context.Livro.FindAsync(IdLivro);

            // Se o livro não for encontrado, retorna um código 404 (NotFound)
            if (livro == null)
            {
                return NotFound();
            }

            // Retorna o livro encontrado
            return livro;
        }


        [HttpPut("{LivroId}")]
        public async Task<IActionResult> Atualizar(int IdLivro, Livro livro)
        {
            // Verifica se o ID fornecido na URL corresponde ao ID do livro
            if (IdLivro != livro.IdLivro)
            {
                return BadRequest();
            }

            // Marca o livro como modificado para que o Entity Framework saiba que ele deve ser atualizado
            _context.Entry(livro).State = EntityState.Modified;

            // Salva as alterações no banco de dados de forma assíncrona
            await _context.SaveChangesAsync();

            // Retorna uma resposta HTTP sem conteúdo (204 - NoContent)
            return NoContent();
        }

  
        [HttpDelete("{LivroId}")]
        public async Task<IActionResult> Deletar(int IdLivro)
        {
            // Busca o livro pelo ID no banco de dados de forma assíncrona
            var livro = await _context.Livro.FindAsync(IdLivro);

            // Se o livro não for encontrado, retorna um código 404 (NotFound)
            if (livro == null)
            {
                return NotFound();
            }

            // Remove o livro do contexto do banco de dados
            _context.Livro.Remove(livro);

            // Salva as alterações no banco de dados de forma assíncrona
            await _context.SaveChangesAsync();

            // Retorna uma resposta HTTP sem conteúdo (204 - NoContent)
            return NoContent();
        }
    }
}