import { Professor } from "./Professor";

export class Disciplina{
    IdDisciplina: number = 0;
    NomeDiciplina: string = '';
    CargaHoraria: number = 0;
    IdProfessor: number = 0;
    ProfessorResponsavel: Professor | undefined;
}