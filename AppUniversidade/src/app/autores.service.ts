import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from './Autor';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  apiUrl = 'http://localhost:5000/Autor';
  constructor(private http: HttpClient) { }
  listar(): Observable<Array<Autor>> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Array<Autor>>(url);
  }
  buscar(AutorId: number): Observable<Autor> {
    const url = `${this.apiUrl}/buscar/${AutorId}`;
    return this.http.get<Autor>(url);
  }
  cadastrar(autor: Autor): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Autor>(url, autor, httpOptions);
  }
  atualizar(autor: Autor): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Autor>(url, autor, httpOptions);
  }
  excluir(AutorId: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${AutorId}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
