import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles : Array<Role>;
  constructor(private roleService : RoleService) { }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() : void{
    this.roleService.getRoles()
      .subscribe((roles : Array<Role>) => {
        this.roles = roles;
      },
      error =>{
        alert('Error');
        console.log(error);
      });
  }
  

}
