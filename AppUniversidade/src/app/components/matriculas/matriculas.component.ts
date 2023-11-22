import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Estudante } from 'src/app/Estudante';
import { Curso } from 'src/app/Curso';
import { Cronograma } from 'src/app/Cronograma';
import { EstudantesService } from 'src/app/estudantes.service';
import { CursosService } from 'src/app/cursos.service';
import { CronogramasService } from 'src/app/cronogramas.service';
import { Matricula } from 'src/app/Matricula';
import { MatriculasService } from 'src/app/matriculas.service';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  estudantes: Array<Estudante> | undefined;
  cursos: Array<Curso> | undefined;
  cronogramas: Array<Cronograma> | undefined;
  
  constructor(private matriculasService : MatriculasService, private estudantesService : EstudantesService, private cursosService : CursosService, private cronogramasService : CronogramasService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Matricula';
    this.estudantesService.listar().subscribe(estudantes => {
      this.estudantes = estudantes;
      if (this.estudantes && this.estudantes.length > 0) {
        this.formulario.get('IdEstudante')?.setValue(this.estudantes[0].IdEstudante);
      }
    });
    this.cursosService.listar().subscribe(cursos => {
      this.cursos = cursos;
      if (this.cursos && this.cursos.length > 0) {
        this.formulario.get('IdCurso')?.setValue(this.cursos[0].IdCurso);
      }
    });
    this.cronogramasService.listar().subscribe(cronogramas => {
      this.cronogramas = cronogramas;
      if (this.cronogramas && this.cronogramas.length > 0) {
        this.formulario.get('CronogramaId')?.setValue(this.cronogramas[0].CronogramaId);
      }
    });
    this.formulario = new FormGroup({
      IdMatricula: new FormControl(null),
      DataMatricula: new FormControl(null),
      MatriculaAtiva: new FormControl(null)

    })
  }
  enviarFormulario(): void {
    const matricula : Matricula = this.formulario.value;
    const observer: Observer<Matricula> ={
      next(_result): void {
        alert("Matricula salva com sucesso.");
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    
    if (matricula.IdMatricula && !isNaN(Number(matricula.IdMatricula))) {
      this.matriculasService.atualizar(matricula).subscribe(observer);
    } else {
      this.matriculasService.cadastrar(matricula).subscribe(observer);
    }
  } 
}
