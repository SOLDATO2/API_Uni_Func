import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SalasService } from 'src/app/salas.service';
import { Sala } from 'src/app/Sala';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private salasService : SalasService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Sala';
    this.formulario = new FormGroup({
      IdSala: new FormControl(null),
      NumeroSala: new FormControl(null),
    })
  }
  enviarFormulario(): void {
    const sala : Sala = this.formulario.value;
    this.salasService.cadastrar(sala).subscribe(result => {
      alert('Sala inserida com sucesso.');
    })
  } 
}
