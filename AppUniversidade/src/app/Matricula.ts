import { Cronograma } from "./Cronograma";
import { Curso } from "./Curso";
import { Estudante } from "./Estudante";

export class Matricula{
    IdMatricula: number = 0;
    IdEstudante: number = 0;
    EstudanteMatriculado: Estudante | null = null;
    IdCurso: number = 0;
    CursoMatriculado: Curso | null = null;
    DataMatricula: Date | undefined;
    MatriculaAtiva: boolean | undefined;
    CronogramaId: number = 0;
    CronogramaEstudante: Cronograma | null = null;

}