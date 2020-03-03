import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';
import { UserService } from '../services/user.service';
import { RoleService } from '../services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user : User;
  roles : Array<Role>;
  invalidUsernameText : string = "Username is required";

  constructor(
    private userService : UserService,
    private roleService : RoleService,
    private router : Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.loadRoles();
  }

  loadRoles() : void{
    this.roleService.getRoles()
      .subscribe((roles : Array<Role>) => {
        this.roles = roles;
      },
      error => {
        alert('Error');
        console.log(error);
      })
  }

  guardar() : void{
    debugger;
    this.userService.post(this.user)
      .subscribe((user : User) => {
        this.router.navigate(["/users"]);
      },
      error => {
        alert('error');
        console.log(error);
      })
  }
}
