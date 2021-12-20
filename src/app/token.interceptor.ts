import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SesionStorageService } from "./todos/services/session-storage.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
   constructor(private sesionStorageService:SesionStorageService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.sesionStorageService.getToken()
        const modifiedReq= req.clone({
        headers:req.headers.set('authorizatoin', `${userToken}`)
    });
    return next.handle(modifiedReq);
  }
}