import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionStorageService {

  constructor() { }
  public getToken() {
    const token = sessionStorage.getItem('token') || 'null';
    return JSON.parse(token);
  }
  public setToken(token: string) {
    return sessionStorage.setItem("token", JSON.stringify(token));
  }
}
