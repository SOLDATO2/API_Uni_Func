import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './Livro';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  apiUrl = 'http://localhost:5000/Livro';
  constructor(private http: HttpClient) { }
  listar(): Observable<Livro[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Livro[]>(url);
  }
  buscar(IdLivro: number): Observable<Livro> {
    const url = `${this.apiUrl}/buscar/${IdLivro}`;
    return this.http.get<Livro>(url);
  }
  cadastrar(livro: Livro): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Livro>(url, livro, httpOptions);
  }
  atualizar(livro: Livro): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Livro>(url, livro, httpOptions);
  }
  excluir(IdLivro: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdLivro}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
