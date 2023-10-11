using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Uni_Func.Models;
using API_Uni_Func.Data;

//FELIPE
//ok
namespace API_Uni_Func.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EstudanteController : ControllerBase{
        private UniDbContext _context;
        public EstudanteController(UniDbContext context) // Define em _context o banco de dados que esta sendo utilizado
        {
            _context = context;
        }

        // CADASTRAR ESTUDANTE
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar(Estudante estudante)
        {
            _context.Add(estudante);
            _context.SaveChanges();
            return Created("", estudante);
        }

        // BUSCAR TODOS ESTUDANTES

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Estudante>>> Listar()
        {
            if (_context.Estudante is null)
                return NotFound();
            return await _context.Estudante.ToListAsync();
        }

        // BUSCAR ESTUDANTE POR ID
        [HttpGet("BuscarPorId")]
        public async Task<ActionResult<Estudante>> ListarId(int EstudanteId)
        {
            var estudante = await _context.Estudante.FindAsync(EstudanteId);

            if (estudante == null)
            {
                return NotFound();
            }

            return estudante;

        }

        //ATUALIZAR ESTUDANTE POR ID
        [HttpPut("Atualizar")]
        public async Task<IActionResult> Atualizar(int IdEstudante, Estudante estudante)
        {

            if (IdEstudante != estudante.IdEstudante)
            {
                return BadRequest();
            }

            _context.Entry(estudante).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //DELETAR ESTUDANTE POR ID
        [HttpDelete("Deletar")]
        public async Task<IActionResult> Deletar(int IdEstudante)
        {
            var estudante = await _context.Estudante.FindAsync(IdEstudante);

            if (estudante == null)
            {
                return NotFound();
            }

            _context.Estudante.Remove(estudante);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}