import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

signIn:any[] = [];


signInObj:any ={
  email:'',
  password:'',
} 

  constructor() { }

  ngOnInit(): void {

   

  }

  userSignIn() {
    
   

  }
}
