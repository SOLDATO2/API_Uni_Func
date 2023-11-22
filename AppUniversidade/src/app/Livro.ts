import { Autor } from "./Autor";

export class Livro {
    IdLivro: number = 0;
    Titulo: string = '';
    Autores: Autor[] | null = null; // Define Autores como um array de objetos Autor
}