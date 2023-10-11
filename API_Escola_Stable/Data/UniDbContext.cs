using Microsoft.EntityFrameworkCore;
using API_Escola_Stable.Models;
namespace API_Escola_Stable.Data
{
    public class UniDbContext : DbContext
    {
        public UniDbContext(DbContextOptions<UniDbContext> options) : base(options) // Função que a criação do BD, sem isto não é posivel listar/registrar: https://stackoverflow.com/questions/33455041/asp-net-5-ef-7-and-sqlite-sqlite-error-1-no-such-table-blog
        {
            Database.EnsureCreated(); 
        }

        //inicio tabelas
        public DbSet<Estudante> Estudante { get; set; }
        public DbSet<Professor> Professor { get; set; }
        public DbSet<Livro> Livro { get; set; }
        public DbSet<Curso> Curso { get; set; }
        public DbSet<Autor> Autor { get; set; }
        public DbSet<Matricula> Matricula { get; set; }
        public DbSet<Sala> Sala { get; set; }
        public DbSet<Disciplina> Disciplina { get; set; }
        public DbSet<Cronograma> Cronograma { get; set; } //Oia ai O
        public DbSet<Aula> Aula { get; set; }
        //fim tabelas

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("DataSource=escola.db;Cache=Shared");
        }
    }   
}
