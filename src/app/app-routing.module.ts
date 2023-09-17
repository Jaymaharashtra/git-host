import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'signup',
    component:SignupComponent
  },

  {
    path:'signin',
    component:SignInComponent
  },

  { 
    path: 'user-list', 
    component: UserListComponent 
  },

  { 
    path: 'edit/:id', 
    component: UserEditComponent 
},

  { 
    path: 'team-member', 
    redirectTo: '/user-list', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
