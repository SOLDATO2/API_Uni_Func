using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Uni_Func.Models;
using API_Uni_Func.Data;

//GRABRIEL

namespace API_Uni_Func.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CursoController : ControllerBase
    {
        private UniDbContext _context;

        public CursoController(UniDbContext context)
        {
            _context = context;
        }

        // CADASTRAR CURSO
        [HttpPost]
        [Route("cadastrar")]
        public async Task<ActionResult<Curso>> Cadastrar(Curso curso)
        {
            _context.Curso.Add(curso);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Listar), new { id = curso.IdCurso });
        }

        // BUSCAR TODOS OS CURSOS
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Curso>>> Listar()
        {
            var cursos = await _context.Curso.ToListAsync();
            if (cursos == null || cursos.Count == 0)
                return NotFound();

            return Ok(cursos);
        }

        // BUSCAR CURSO POR ID
        [HttpGet("BuscarPorId")]
        public async Task<ActionResult<Curso>> BuscarPorId(int IdCurso)
        {
            var curso = await _context.Curso.FindAsync(IdCurso);

            if (curso == null)
            {
                return NotFound();
            }

            return curso;
        }

        // ATUALIZAR CURSO
        [HttpPut("Atualizar")]
        public async Task<IActionResult> Atualizar(int IdCurso, Curso curso)
        {
            if (IdCurso != curso.IdCurso)
            {
                return BadRequest();
            }

            _context.Entry(curso).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETAR CURSO
        [HttpDelete("Deletar")]
        public async Task<IActionResult> Deletar(int IdCurso)
        {
            var curso = await _context.Curso.FindAsync(IdCurso);

            if (curso == null)
            {
                return NotFound();
            }

            _context.Curso.Remove(curso);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
