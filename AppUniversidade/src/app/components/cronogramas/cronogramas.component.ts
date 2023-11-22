import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observer } from 'rxjs';
import { Aula } from 'src/app/Aula';
import { Cronograma } from 'src/app/Cronograma';
import { AulasService } from 'src/app/aulas.service';
import { CronogramasService } from 'src/app/cronogramas.service';
// ta errado isso aq, lembrar 

@Component({
  selector: 'app-cronogramas',
  templateUrl: './cronogramas.component.html',
  styleUrls: ['./cronogramas.component.css']
})
export class CronogramasComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  aulas: Array<Aula> | undefined;

  constructor(private cronogramasService: CronogramasService, private aulasService : AulasService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Cronograma';
    this.aulasService.listar().subscribe(aulas => {
      this.aulas = aulas;
      if (this.aulas && this.aulas.length > 0) {
        this.formulario.get('IdAula')?.setValue(this.aulas[0].IdAula);
      }
    });

    this.formulario = new FormGroup({
      CronogramaId: new FormControl(null)
    });
  }

  enviarFormulario(): void {
    const cronograma: Cronograma = this.formulario.value;
    const observer: Observer<Cronograma> = {
        next(_result): void{
          alert('Modelo salvo com sucesso.');
        },
        error(_error): void {
          alert('Erro ao salvar!');
        },
        complete(): void {
        },
        };
      if (cronograma.CronogramaId && !isNaN(Number(cronograma.CronogramaId))){
        this.cronogramasService.atualizar(cronograma).subscribe(observer);
      } else{
        this.cronogramasService.cadastrar(cronograma).subscribe(observer);
      }
    }
  }
