import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from './Disciplina';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  apiUrl = 'http://localhost:5000/Disciplina';
  constructor(private http: HttpClient) { }
  listar(): Observable<Disciplina[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Disciplina[]>(url);
  }
  buscar(IdDisciplina: number): Observable<Disciplina> {
    const url = `${this.apiUrl}/buscar/${IdDisciplina}`;
    return this.http.get<Disciplina>(url);
  }
  cadastrar(disciplina: Disciplina): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Disciplina>(url, disciplina, httpOptions);
  }
  atualizar(disciplina: Disciplina): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Disciplina>(url, disciplina, httpOptions);
  }
  excluir(IdDisciplina: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdDisciplina}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
