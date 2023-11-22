import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CursosService } from 'src/app/cursos.service';
import { Curso } from 'src/app/Curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private cursosService : CursosService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Curso';
    this.formulario = new FormGroup({
      IdCurso: new FormControl(null),
      Nome: new FormControl(null),
      CodigoCurso: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const curso : Curso = this.formulario.value;
    this.cursosService.cadastrar(curso).subscribe(result => {
      alert('Curso inserido com sucesso.');
    })
  } 
}
