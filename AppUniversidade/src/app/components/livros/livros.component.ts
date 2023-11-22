import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LivrosService } from 'src/app/livros.service';
import { Livro } from 'src/app/Livro';
import { Autor } from 'src/app/Autor';
import { AutoresService } from 'src/app/autores.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  autores: Array<Autor> | undefined;
  
  constructor(private livrosService : LivrosService, private autoresService : AutoresService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo livro';
    this.autoresService.listar().subscribe(autores => {
      this.autores = autores;
      if (this.autores && this.autores.length > 0) {
        this.formulario.get('AutorId')?.setValue(this.autores[0].AutorId);
      }
    });
    this.formulario = new FormGroup({
      IdLivro: new FormControl(null),
      Titulo: new FormControl(null),
      // n tenho ctz
      AutorId: new FormControl(null)
      //
    })
  }
  enviarFormulario(): void {
    const livro : Livro = this.formulario.value;
    const observer: Observer<Livro> ={
      next(_result): void {
        alert("Livro salvo com sucesso.");
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    
    if (livro.IdLivro && !isNaN(Number(livro.IdLivro))) {
      this.livrosService.atualizar(livro).subscribe(observer);
    } else {
      this.livrosService.cadastrar(livro).subscribe(observer);
    }
  } 
}
