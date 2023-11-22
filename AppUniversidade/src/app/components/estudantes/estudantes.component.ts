import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstudantesService } from 'src/app/estudantes.service';
import { Estudante } from 'src/app/Estudante';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private estudantesService : EstudantesService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Estudante';
    this.formulario = new FormGroup({
      IdEstudante: new FormControl(null),
      Nome: new FormControl(null),
      Idade: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const estudante : Estudante = this.formulario.value;
    this.estudantesService.cadastrar(estudante).subscribe(result => {
      alert('Estudante inserido com sucesso.');
    })
  } 
}
