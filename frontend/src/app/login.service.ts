import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://192.168.1.19:8080'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient,) { }

  logar(userPassword: {user: string, password: string}): Observable<any>{
    return this.http.post<Object>(`${this.url}/login`, userPassword, this.httpOptions);
  }

}
