import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from "../task.interface"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getTodo(): Observable<any>{
    return this.http.get('http://localhost:3000/task')
  }
}
