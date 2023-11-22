import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AulasService } from 'src/app/aulas.service';
import { Aula } from 'src/app/Aula';
import { Sala } from 'src/app/Sala';
import { SalasService } from 'src/app/salas.service';
import { Disciplina } from 'src/app/Disciplina';
import { DisciplinasService } from 'src/app/disciplinas.service';
import { Observer } from 'rxjs';
import { Cronograma } from 'src/app/Cronograma';
import { CronogramasService } from 'src/app/cronogramas.service';

@Component({
  selector: 'app-autores',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  disciplinas: Array<Disciplina> | undefined;
  salas: Array<Sala> | undefined;

  cronogramas: Array<Cronograma> | undefined;
  
  constructor(private aulasService : AulasService, private disciplinaService : DisciplinasService, private salaService : SalasService, private cronogramaService : CronogramasService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Aula';
    this.disciplinaService.listar().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
      if (this.disciplinas && this.disciplinas.length > 0) {
        this.formulario.get('IdDisciplina')?.setValue(this.disciplinas[0].IdDisciplina);
      }
    });
    this.salaService.listar().subscribe(salas => {
      this.salas = salas;
      if (this.salas && this.salas.length > 0) {
        this.formulario.get('IdSala')?.setValue(this.salas[0].IdSala);
      }
    });
    this.cronogramaService.listar().subscribe(cronogramas => {
      this.cronogramas = cronogramas;
      if (this.cronogramas && this.cronogramas.length > 0) {
        this.formulario.get('CronogramaId')?.setValue(this.cronogramas[0].CronogramaId);
      }
    });
  
    this.formulario = new FormGroup({
      IdAula: new FormControl(null),
      IdDisciplina: new FormControl(null),
      DataDiciplina: new FormControl(null), // n tenho ctz
      IdSala: new FormControl(null),
      CronogramaId: new FormControl(null)
      
    })
  }
  enviarFormulario(): void {
    const aula : Aula = this.formulario.value;
    const observer: Observer<Aula> ={
      next(_result): void {
        alert("Aula salvo com sucesso.");
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    
    if (aula.IdAula && !isNaN(Number(aula.IdAula))) {
      this.aulasService.atualizar(aula).subscribe(observer);
    } else {
      this.aulasService.cadastrar(aula).subscribe(observer);
    }
  }
}
