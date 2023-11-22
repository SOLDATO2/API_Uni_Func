import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from './Professor';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  apiUrl = 'http://localhost:5000/Professor';
  constructor(private http: HttpClient) { }
  listar(): Observable<Professor[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Professor[]>(url);
  }
  buscar(IdProfessor: number): Observable<Professor> {
    const url = `${this.apiUrl}/buscar/${IdProfessor}`;
    return this.http.get<Professor>(url);
  }
  cadastrar(professor: Professor): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Professor>(url, professor, httpOptions);
  }
  atualizar(professor: Professor): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Professor>(url, professor, httpOptions);
  }
  excluir(IdProfessor: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdProfessor}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
