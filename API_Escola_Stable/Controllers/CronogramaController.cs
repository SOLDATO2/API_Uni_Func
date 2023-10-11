using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Uni_Func.Models;
using API_Uni_Func.Data;
//ALEXANDRE
// DELETE nao funciona pois ocorre algum erro devido ao relacionamento com Diciplina, Sala, Professor e Curso
namespace API_Uni_Func.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CronogramaController : ControllerBase
    {
        private UniDbContext _context;

        public CronogramaController(UniDbContext context)
        {
            _context = context;
        }

        //CADASTRAR CRONOGRAMA
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar(Cronograma cronograma)
        {
            _context.Add(cronograma);
            _context.SaveChanges();
            return Created("", cronograma);
        }

        // BUSCAR TODOS OS CRONOGRAMAS
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Cronograma>>> Listar()
        {
            if (_context.Cronograma is null)
                return NotFound();
            return await _context.Cronograma.ToListAsync();
        }

        // BUSCAR CRONOGRAMA POR ID
        [HttpGet("BuscarPorId")]
        public async Task<ActionResult<Cronograma>> ListarId(int CronogramaId)
        {
            var cronograma = await _context.Cronograma.FindAsync(CronogramaId);

            if (cronograma == null)
            {
                return NotFound();
            }

            return cronograma;

        }

        //ATUALIZAR CRONOGRAMA
        [HttpPut("Atualizar")]
        public async Task<IActionResult> Atualizar(int CronogramaId, Cronograma cronograma)
        {

            if (CronogramaId != cronograma.CronogramaId)
            {
                return BadRequest();
            }

            _context.Entry(cronograma).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //DELETAR CRONOGRAMA
        [HttpDelete("Deletar")]
        public async Task<IActionResult> Deletar(int CronogramaId)
        {
            var cronograma = await _context.Cronograma.FindAsync(CronogramaId);

            if (cronograma == null)
            {
                return NotFound();
            }

            _context.Cronograma.Remove(cronograma);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
