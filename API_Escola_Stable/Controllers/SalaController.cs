using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Escola_Stable.Models;
using API_Escola_Stable.Data;
// ALEXANDRE
//ok
namespace API_Escola_Stable.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalaController : ControllerBase
    {
        private UniDbContext _context;
        public SalaController(UniDbContext context)
        {
            _context = context;
        }

        //CADASTRAR DISCIPLINA
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar(Sala sala)
        {
            _context.Add(sala);
            _context.SaveChanges();
            return Created("", sala);
        }

        // BUSCAR TODAS AS DISCIPLINAS

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Sala>>> Listar()
        {
            if (_context.Sala is null)
                return NotFound();
            return await _context.Sala.ToListAsync();
        }

        // BUSCAR DISCIPLINA POR ID
        [HttpGet("BuscarPorId")]
        public async Task<ActionResult<Sala>> ListarId(int SalaId)
        {
            var sala = await _context.Sala.FindAsync(SalaId);

            if (sala == null)
            {
                return NotFound();
            }

            return sala;

        }

        //ATUALIZAR DISCIPLINA
        [HttpPut("Atualizar")]
        public async Task<IActionResult> Atualizar(int SalaId, Sala sala)
        {

            if (SalaId != sala.IdSala)
            {
                return BadRequest();
            }

            _context.Entry(sala).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //DELETAR DISCIPLINA
        [HttpDelete("Deletar")]
        public async Task<IActionResult> Deletar(int SalaId)
        {
            var sala = await _context.Sala.FindAsync(SalaId);

            if (sala == null)
            {
                return NotFound();
            }

            _context.Sala.Remove(sala);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}