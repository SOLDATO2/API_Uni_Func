import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
// serviços
import { EstudantesService } from './estudantes.service';
import { EstudantesComponent } from './components/estudantes/estudantes.component';

import { CursosService } from './cursos.service';
import { CursosComponent } from './components/cursos/cursos.component';

import { ProfessoresService } from './professores.service';
import { ProfessoresComponent } from './components/professores/professores.component';

import { SalasService } from './salas.service';
import { SalasComponent } from './components/salas/salas.component';

import { AutoresService } from './autores.service';
import { AutoresComponent } from './components/autores/autores.component';

import { LivrosService } from './livros.service';
import { LivrosComponent } from './components/livros/livros.component';

import { DisciplinasService } from './disciplinas.service';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';

import { AulasService } from './aulas.service';
import { AulasComponent } from './components/aulas/aulas.component';

import { CronogramasService } from './cronogramas.service';
import { CronogramasComponent } from './components/cronogramas/cronogramas.component';

import {MatriculasService} from './matriculas.service';
import { MatriculasComponent} from './components/matriculas/matriculas.component';





@NgModule({
  declarations: [
    AppComponent,
    //lembrar de adicionar um component para cada classe
    EstudantesComponent,
    CursosComponent,
    ProfessoresComponent,
    SalasComponent,
    AutoresComponent,
    LivrosComponent,
    DisciplinasComponent,
    AulasComponent,
    CronogramasComponent,
    MatriculasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  //lembrar de adicionar os serviços e cada classe
  //                            vv    
  providers: [HttpClientModule, EstudantesService, CursosService, ProfessoresService, SalasService, AutoresService, LivrosService, DisciplinasService, AulasService, CronogramasService, MatriculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
