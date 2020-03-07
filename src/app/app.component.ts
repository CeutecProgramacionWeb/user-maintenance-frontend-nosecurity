import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-maintenance';
  constructor(private authenticationService : AuthenticationService, private router : Router){
  
  }

  logOut(){
    this.authenticationService.logOut();
    this.router.navigate(["/login"]);
  }
}
