import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl : string = "http://localhost:8080/api";
  private usersPath : string = "users";

  constructor(private httpClient : HttpClient) { }

  getUsers(){
    return this.httpClient.get(`${this.baseUrl}/${this.usersPath}`);
  }

  post(user : User){
    return this.httpClient.post(`${this.baseUrl}/${this.usersPath}`, user);
  }
}
