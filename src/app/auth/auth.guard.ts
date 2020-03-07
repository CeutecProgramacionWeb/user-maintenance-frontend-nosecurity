import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private router : Router, private authenticationService : AuthenticationService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let authenticated = this.authenticationService.isLoggedIn();
      let isAdmin = this.authenticationService.isAdmin();

      if(!isAdmin && next.data.adminRequired){
        this.router.navigate(["/login"]);
      }

      if(!authenticated){
        this.router.navigate(["/login"]);
      }

      return authenticated;
  }
  
}
