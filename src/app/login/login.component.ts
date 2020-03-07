import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  success : boolean;
  message : string;

  constructor(private authenticationService : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authenticationService.login(this.username, this.password)
      .subscribe((data : any) => {
        if(!data.auth){
          this.message = data.message
        }
        this.success = data.auth;
        if(data.auth){
          this.authenticationService.saveToken(data.token, data.isAdmin);
          this.router.navigate(["/users"]);
        }
      },
      error => {
        alert('error');
        console.log(error);
      })
  }
}
