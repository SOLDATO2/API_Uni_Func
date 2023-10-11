using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Escola_Stable.Models;
using API_Escola_Stable.Data;

//FELIPE

// nao funciona delete
namespace API_Escola_Stable.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AulaController : ControllerBase
    {
        private UniDbContext _context;
        public AulaController(UniDbContext context)
        {
            _context = context;
        }

        //CADASTRAR AULA
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar(Aula aula)
        {
            _context.Add(aula);
            _context.SaveChanges();
            return Created("", aula);
        }

        // BUSCAR TODAS AULAS

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Aula>>> Listar()
        {
            if (_context.Aula is null)
                return NotFound();
            return await _context.Aula.ToListAsync();
        }

        // BUSCAR AULAS POR ID
        [HttpGet("BuscarPorId")]
        public async Task<ActionResult<Aula>> ListarId(int AulaId)
        {
            var aula = await _context.Aula.FindAsync(AulaId);

            if (aula == null)
            {
                return NotFound();
            }

            return aula;

        }

        //ATUALIZAR AULAS POR ID
        [HttpPut("Atualizar")]
        public async Task<IActionResult> Atualizar(int AulaId, Aula aula)
        {

            if (AulaId != aula.IdAula)
            {
                return BadRequest();
            }

            _context.Entry(aula).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //DELETAR AULAS POR ID
        [HttpDelete("Deletar")]
        public async Task<IActionResult> Deletar(int AulaId)
        {
            var aula = await _context.Aula.FindAsync(AulaId);

            if (aula == null)
            {
                return NotFound();
            }

            _context.Aula.Remove(aula);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}