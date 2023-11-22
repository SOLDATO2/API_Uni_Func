import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutoresService } from 'src/app/autores.service';
import { Autor } from 'src/app/Autor';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private autoresService : AutoresService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Autor';
    this.formulario = new FormGroup({
      AutorId: new FormControl(null),
      Nome: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const autor : Autor = this.formulario.value;
    this.autoresService.cadastrar(autor).subscribe(result => {
      alert('Autor inserido com sucesso.');
    })
  } 
}
