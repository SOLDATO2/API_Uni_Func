import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './Curso';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  apiUrl = 'http://localhost:5000/Curso';
  constructor(private http: HttpClient) { }
  listar(): Observable<Curso[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Curso[]>(url);
  }
  buscar(IdCurso: number): Observable<Curso> {
    const url = `${this.apiUrl}/buscar/${IdCurso}`;
    return this.http.get<Curso>(url);
  }
  cadastrar(curso: Curso): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Curso>(url, curso, httpOptions);
  }
  atualizar(curso: Curso): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Curso>(url, curso, httpOptions);
  }
  excluir(IdCurso: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdCurso}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
