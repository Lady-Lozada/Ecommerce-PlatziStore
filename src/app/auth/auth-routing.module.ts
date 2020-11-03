import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  // {path: '', component: AuthComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  /*{path: '', component: AuthComponent, children: [
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent }
  ]}*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
