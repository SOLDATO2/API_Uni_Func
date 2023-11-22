import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DisciplinasService } from 'src/app/disciplinas.service';
import { Disciplina } from 'src/app/Disciplina';
import { Professor } from 'src/app/Professor';
import { ProfessoresService } from 'src/app/professores.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  professores: Array<Professor> | undefined;
  
  constructor(private disciplinasService : DisciplinasService, private professoresService : ProfessoresService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Disciplina';
    this.professoresService.listar().subscribe(professores => {
      this.professores = professores;
      if (this.professores && this.professores.length > 0) {
        this.formulario.get('IdProfessor')?.setValue(this.professores[0].IdProfessor);
      }
    });
    this.formulario = new FormGroup({
      IdDisciplina: new FormControl(null),
      IdProfessor: new FormControl(null),
      ProfessorResponsavel: new FormControl(null),
      NomeDiciplina: new FormControl(null),
      CargaHoraria: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const disciplina : Disciplina = this.formulario.value;
    const observer: Observer<Disciplina> ={
      next(_result): void {
        alert("Disciplina salvo com sucesso.");
      },
      error(_error): void {
        alert('Erro ao salvar!');
      },
      complete(): void {
      },
    };
    
    if (disciplina.IdDisciplina && !isNaN(Number(disciplina.IdDisciplina))) {
      this.disciplinasService.atualizar(disciplina).subscribe(observer);
    } else {
      this.disciplinasService.cadastrar(disciplina).subscribe(observer);
    }
  } 
}
