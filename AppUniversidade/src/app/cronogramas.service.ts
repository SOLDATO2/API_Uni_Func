import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cronograma } from './Cronograma';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CronogramasService {
  apiUrl = 'http://localhost:5000/Cronograma';
  constructor(private http: HttpClient) { }
  listar(): Observable<Array<Cronograma>> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Array<Cronograma>>(url);
  }
  buscar(CronogramaId: number): Observable<Cronograma> {
    const url = `${this.apiUrl}/buscar/${CronogramaId}`;
    return this.http.get<Cronograma>(url);
  }
  cadastrar(cronograma: Cronograma): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Cronograma>(url, cronograma, httpOptions);
  }
  atualizar(cronograma: Cronograma): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Cronograma>(url, cronograma, httpOptions);
  }
  excluir(CronogramaId: number): Observable<any> {
    const url = `${this.apiUrl}/buscar/${CronogramaId}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
