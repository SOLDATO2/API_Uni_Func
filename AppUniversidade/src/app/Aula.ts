import { Disciplina } from "./Disciplina";
import { Sala } from "./Sala";
import { Cronograma } from "./Cronograma";

export class Aula{
    IdAula: number = 0;
    DiciplinaDoDia: Disciplina | undefined;
    DataDiciplina: Date | undefined;
    SalaDeAula: Sala | undefined;

    CronogramaId: number = 0;
    Cronograma: Cronograma | undefined;
}