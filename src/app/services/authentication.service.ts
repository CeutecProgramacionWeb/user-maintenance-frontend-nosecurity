import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl : string = "http://localhost:3000";
  private loginPath : string = "login"

  constructor(private httpClient : HttpClient) { }

  login(paramUsername : string, paramPassword : string){
    return this.httpClient.post(`${this.baseUrl}/${this.loginPath}`, {username : paramUsername, password: paramPassword})
  }

  saveToken(token : string, isAdmin : string){
    localStorage.setItem('token', token);
    localStorage.setItem('isAdmin', isAdmin);
  }

  isAdmin() : boolean{
    return localStorage.getItem('isAdmin') === 'true';
  }

  isLoggedIn() : boolean{
    return localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null;
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
  }

}
