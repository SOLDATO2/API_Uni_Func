﻿using System.ComponentModel.DataAnnotations;
//GRABRIEL
namespace API_Escola_Stable.Models
{
    public class Curso
    {
        [Key]
        public int IdCurso { get; set; }
        public string? Nome { get; set; }
        public int? CodigoCurso { get; set; }
      
    }
}
