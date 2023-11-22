import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from './Sala';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  apiUrl = 'http://localhost:5000/Sala';
  constructor(private http: HttpClient) { }
  listar(): Observable<Sala[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Sala[]>(url);
  }
  buscar(IdSala: number): Observable<Sala> {
    const url = `${this.apiUrl}/buscar/${IdSala}`;
    return this.http.get<Sala>(url);
  }
  cadastrar(sala: Sala): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Sala>(url, sala, httpOptions);
  }
  atualizar(sala: Sala): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Sala>(url, sala, httpOptions);
  }
  excluir(IdSala: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${IdSala}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
