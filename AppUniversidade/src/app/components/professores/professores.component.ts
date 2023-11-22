import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfessoresService } from 'src/app/professores.service';
import { Professor } from 'src/app/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private professoresService : ProfessoresService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Professor';
    this.formulario = new FormGroup({
      IdProfessor: new FormControl(null),
      NomeProfessor: new FormControl(null),
      Especializacao: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const professor : Professor = this.formulario.value;
    this.professoresService.cadastrar(professor).subscribe(result => {
      alert('Professor inserido com sucesso.');
    })
  } 
}
