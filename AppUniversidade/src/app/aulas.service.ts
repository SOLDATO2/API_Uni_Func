import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from './Aula';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AulasService {
  apiUrl = 'http://localhost:5000/Aula';
  constructor(private http: HttpClient) { }
  listar(): Observable<Array<Aula>> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Array<Aula>>(url);
  }
  buscar(IdAula: number): Observable<Aula> {
    const url = `${this.apiUrl}/buscar/${IdAula}`;
    return this.http.get<Aula>(url);
  }
  cadastrar(aula: Aula): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Aula>(url, aula, httpOptions);
  }
  atualizar(aula: Aula): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Aula>(url, aula, httpOptions);
  }
  excluir(IdAula: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdAula}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
