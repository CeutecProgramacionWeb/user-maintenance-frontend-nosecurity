import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'users/create', component: CreateUserComponent},
  { path: 'roles', component: RolesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
