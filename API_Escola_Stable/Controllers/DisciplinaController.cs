using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Uni_Func.Models;
using API_Uni_Func.Data;
//ALEXANDRE
//ok
namespace API_Uni_Func.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DisciplinaController : ControllerBase
    {
        private UniDbContext _context;
        public DisciplinaController(UniDbContext context)
        {
            _context = context;
        }

        //CADASTRAR DISCIPLINA
        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult<Disciplina>> Cadastrar(Disciplina disciplina)
        {
            _context.Disciplina.Add(disciplina);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Listar), new { id = disciplina.IdDisciplina });

        }

        // BUSCAR TODAS AS DISCIPLINAS

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Disciplina>>> Listar()
        {
            if (_context.Disciplina is null)
                return NotFound();
            return await _context.Disciplina.ToListAsync();
        }

        // BUSCAR DISCIPLINA POR ID
        [HttpGet("BuscarPorId")]
        public async Task<ActionResult<Disciplina>> ListarId(int IdDisciplina)
        {
            var disciplina = await _context.Disciplina.FindAsync(IdDisciplina);

            if (disciplina == null)
            {
                return NotFound();
            }

            return disciplina;

        }

        //ATUALIZAR DISCIPLINA
        [HttpPut("Atualizar")]
        public async Task<IActionResult> Atualizar(int IdDisciplina, Disciplina disciplina)
        {

            if (IdDisciplina != disciplina.IdDisciplina)
            {
                return BadRequest();
            }

            _context.Entry(disciplina).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //DELETAR DISCIPLINA
        [HttpDelete("Deletar")]
        public async Task<IActionResult> Deletar(int IdDisciplina)
        {
            var disciplina = await _context.Disciplina.FindAsync(IdDisciplina);

            if (disciplina == null)
            {
                return NotFound();
            }

            _context.Disciplina.Remove(disciplina);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}