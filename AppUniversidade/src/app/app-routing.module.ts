import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudantesComponent } from './components/estudantes/estudantes.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ProfessoresComponent } from './components/professores/professores.component';
import { SalasComponent } from './components/salas/salas.component';
import { AutoresComponent } from './components/autores/autores.component';
import { LivrosComponent } from './components/livros/livros.component';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import {AulasComponent} from './components/aulas/aulas.component';
import { CronogramasComponent } from './components/cronogramas/cronogramas.component';
import {MatriculasComponent} from './components/matriculas/matriculas.component';

const routes: Routes = [
  {path: 'estudantes', component:EstudantesComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'professores', component:ProfessoresComponent},
  {path: 'salas', component:SalasComponent},
  {path: 'autores', component:AutoresComponent},
  {path: 'livros', component:LivrosComponent},
  {path: 'disciplinas', component:DisciplinasComponent},
  {path: 'aulas', component:AulasComponent},
  {path: 'cronogramas', component:CronogramasComponent},
  {path: 'matriculas', component:MatriculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
