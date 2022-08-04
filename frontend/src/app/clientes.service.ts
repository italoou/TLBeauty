import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private url = 'http://0.0.0.0:8080'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    
  };

  constructor( private http: HttpClient,) { }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/cliente/${id}`);
  }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}/clientes`);
  }

  addCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}/clientes`, cliente, this.httpOptions);
  } 
}
