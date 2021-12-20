import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   api = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getTodos(): Observable<any> {
    return this.http.get(`${this.api}/task`, { })
  }

  getTodo(id: any) {
    return this.http.get(`${this.api}/task/${id}`, { })

  }

  createTodo(data: any): Observable<any> {
    return this.http.post(`${this.api}/task`, data, { })
  }
  
  deleteTodo(id: any): Observable<any> {
    return this.http.delete(`${this.api}/task/${id}`, { })
  }
  deleteAllTodo():Observable<any>{
    return this.http.delete(`${this.api}`, { })
  }

  editTodo(id: any, data: any): Observable<any> {
    return this.http.put(`${this.api}/task/${id}`, { data }, { })
  }

  login(body: FormGroup): Observable<any> {
    return this.http.post(`${this.api}/auth/login`, body, { responseType: 'text' });
  }
}

