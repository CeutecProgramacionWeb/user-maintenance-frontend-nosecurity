import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl : string = "http://localhost:8080/api";
  private rolesPath : string = "roles";
  constructor(private httpClient : HttpClient) { }

  getRoles(){
    return this.httpClient.get(`${this.baseUrl}/${this.rolesPath}`)
  }

}
