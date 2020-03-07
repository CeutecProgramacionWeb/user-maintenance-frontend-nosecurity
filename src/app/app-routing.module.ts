import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent, canActivate:  [AuthGuard]},
  { path: 'users/create', component: CreateUserComponent, canActivate:  [AuthGuard], data: {adminRequired : true}},
  { path: 'roles', component: RolesComponent, canActivate:  [AuthGuard]},
  { path: '', redirectTo: '/users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
