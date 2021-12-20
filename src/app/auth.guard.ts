import { AuthService } from './todos/services/auth.service';
import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { ApiService } from './todos/services/api.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public authservice: AuthService) { }
    canActivate(route:  ActivatedRouteSnapshot , state:  RouterStateSnapshot): boolean {
        let token= this.authservice.isLoggedIn()
        console.log(token);
        
        if (!token) {
            console.log('User not authorized');
            return false;
        }
        console.log('User authorized');
        return true;
    }
}