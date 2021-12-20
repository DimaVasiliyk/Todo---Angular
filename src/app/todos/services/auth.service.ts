import { Injectable } from '@angular/core';
import { SesionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken: string;

constructor(public  storageService:SesionStorageService) {
  this.accessToken = this.storageService.getToken();
 }

  isLoggedIn (){
    return !!this.accessToken;
  }
}
