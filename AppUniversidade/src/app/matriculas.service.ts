import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from './Matricula';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {
  apiUrl = 'http://localhost:5000/Matricula';
  constructor(private http: HttpClient) { }
  listar(): Observable<Matricula[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Matricula[]>(url);
  }
  buscar(IdMatricula: number): Observable<Matricula> {
    const url = `${this.apiUrl}/buscar/${IdMatricula}`;
    return this.http.get<Matricula>(url);
  }
  cadastrar(matricula: Matricula): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Matricula>(url, matricula, httpOptions);
  }
  atualizar(matricula: Matricula): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Matricula>(url, matricula, httpOptions);
  }
  excluir(IdMatricula: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdMatricula}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
