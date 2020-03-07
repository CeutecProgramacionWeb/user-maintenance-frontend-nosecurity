import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : Array<User>;

  constructor(private userService : UserService, private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() : void{
    this.userService.getUsers()
      .subscribe((users : Array<User>) => {
        this.users = users;
      }, error=> {
        alert('Ocurrió un error');
        console.log(error);
      })

  }

}
