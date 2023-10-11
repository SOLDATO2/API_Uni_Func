using API_Escola_Stable.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Escola_Stable.Data;
//CHATGPT
namespace API_Escola_Stable.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfessorController : ControllerBase
    {
        private UniDbContext _context;

        public ProfessorController(UniDbContext context)
        {
            _context = context;
        }

       
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar(Professor professor)
        {
            // Adiciona o professor ao contexto do banco de dados
            _context.Add(professor);

            // Salva as alterações no banco de dados
            _context.SaveChanges();

            // Retorna um código 201 (Created) junto com o professor cadastrado
            return Created("", professor);
        }

       
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Professor>>> Listar()
        {
            // Obtém todos os professores da tabela "Professores" no banco de dados de forma assíncrona
            var professores = await _context.Professor.ToListAsync();

            // Retorna uma resposta HTTP com a lista de professores
            return Ok(professores);
        }

      
        [HttpGet("{ProfessorId}")]
        public async Task<ActionResult<Professor>> BuscarPorId(int ProfessorId)
        {
            // Busca um professor pelo ID no banco de dados de forma assíncrona
            var professor = await _context.Professor.FindAsync(ProfessorId);

            // Se o professor não for encontrado, retorna um código 404 (NotFound)
            if (professor == null)
            {
                return NotFound();
            }

            // Retorna o professor encontrado
            return professor;
        }

     
        [HttpPut("{ProfessorId}")]
        public async Task<IActionResult> Atualizar(int IdProfessor, Professor professor)
        {
            // Verifica se o ID fornecido na URL corresponde ao ID do professor
            if (IdProfessor != professor.IdProfessor)
            {
                return BadRequest();
            }

            // Marca o professor como modificado para que o Entity Framework saiba que ele deve ser atualizado
            _context.Entry(professor).State = EntityState.Modified;

            // Salva as alterações no banco de dados de forma assíncrona
            await _context.SaveChangesAsync();

            // Retorna uma resposta HTTP sem conteúdo (204 - NoContent)
            return NoContent();
        }

    
        [HttpDelete("{ProfessorId}")]
        public async Task<IActionResult> Deletar(int IdProfessor)
        {
            // Busca o professor pelo ID no banco de dados de forma assíncrona
            var professor = await _context.Professor.FindAsync(IdProfessor);

            // Se o professor não for encontrado, retorna um código 404 (NotFound)
            if (professor == null)
            {
                return NotFound();
            }

            // Remove o professor do contexto do banco de dados
            _context.Professor.Remove(professor);

            // Salva as alterações no banco de dados de forma assíncrona
            await _context.SaveChangesAsync();

            // Retorna uma resposta HTTP sem conteúdo (204 - NoContent)
            return NoContent();
        }
    }
}