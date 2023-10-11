using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_Uni_Func.Models;
using API_Uni_Func.Data;

//FELIPE

// ok
namespace API_Uni_Func.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutorController : ControllerBase
    {
        private UniDbContext _context;
        public AutorController(UniDbContext context)
        {
            _context = context;
        }

        //CADASTRAR AUTOR
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar(Autor autor)
        {
            _context.Add(autor);
            _context.SaveChanges();
            return Created("", autor);
        }

        // BUSCAR TODOS OS AUTORES

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Autor>>> Listar()
        {
            if (_context.Autor is null)
                return NotFound();
            return await _context.Autor.ToListAsync();
        }

        // BUSCAR AUTORES POR ID
        [HttpGet("BuscarPorId")]
        public async Task<ActionResult<Autor>> ListarId(int AutorId)
        {
            var autor = await _context.Autor.FindAsync(AutorId);

            if (autor == null)
            {
                return NotFound();
            }

            return autor;

        }

        //ATUALIZAR AUTOR POR ID
        [HttpPut("Atualizar")]
        public async Task<IActionResult> Atualizar(int AutorId, Autor autor)
        {

            if (AutorId != autor.AutorId)
            {
                return BadRequest();
            }

            _context.Entry(autor).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //DELETAR AUTOR POR ID
        [HttpDelete("Deletar")]
        public async Task<IActionResult> Deletar(int AutorId)
        {
            var autor = await _context.Autor.FindAsync(AutorId);

            if (autor == null)
            {
                return NotFound();
            }

            _context.Autor.Remove(autor);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}