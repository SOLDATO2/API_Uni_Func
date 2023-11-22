import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudante } from './Estudante';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EstudantesService {
  apiUrl = 'http://localhost:5000/Estudante';
  constructor(private http: HttpClient) { }
  listar(): Observable<Estudante[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Estudante[]>(url);
  }
  buscar(IdEstudante: number): Observable<Estudante> {
    const url = `${this.apiUrl}/buscar/${IdEstudante}`;
    return this.http.get<Estudante>(url);
  }
  cadastrar(estudante: Estudante): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Estudante>(url, estudante, httpOptions);
  }
  atualizar(estudante: Estudante): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Estudante>(url, estudante, httpOptions);
  }
  excluir(IdEstudante: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdEstudante}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
