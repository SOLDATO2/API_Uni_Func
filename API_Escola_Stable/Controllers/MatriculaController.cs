using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Uni_Func.Models;
using API_Uni_Func.Data;

//GRABRIEL
namespace API_Uni_Func.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MatriculaController : ControllerBase
    {
        private UniDbContext _context;

        public MatriculaController(UniDbContext context)
        {
            _context = context;
        }

        // CADASTRAR MATRÍCULA
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar(Matricula matricula)
        {
            _context.Add(matricula);
            _context.SaveChanges();
            return Created("", matricula);
        }

        // BUSCAR TODAS AS MATRÍCULAS
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Matricula>>> Listar()
        {
            var matriculas = await _context.Matricula.ToListAsync();
            if (matriculas == null || matriculas.Count == 0)
                return NotFound();

            return Ok(matriculas);
        }

        // BUSCAR MATRÍCULA POR ID
        [HttpGet("BuscarPorId")]
        public async Task<ActionResult<Matricula>> ListarId(int IdMatricula)
        {
            var matricula = await _context.Matricula.FindAsync(IdMatricula);

            if (matricula == null)
            {
                return NotFound();
            }

            return Ok(matricula);
        }

        // ATUALIZAR MATRÍCULA
        [HttpPut("Atualizar")]
        public async Task<IActionResult> Atualizar(int IdMatricula, Matricula matricula)
        {
            if (IdMatricula != matricula.IdMatricula)
            {
                return BadRequest();
            }

            _context.Entry(matricula).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETAR MATRÍCULA
        [HttpDelete("Deletar")]
        public async Task<IActionResult> Deletar(int IdMatricula)
        {
            var matricula = await _context.Matricula.FindAsync(IdMatricula);

            if (matricula == null)
            {
                return NotFound();
            }

            _context.Matricula.Remove(matricula);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
