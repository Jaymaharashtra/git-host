import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignUp: any[] =[];

  signUpObj: any = {
    first_name : '',
    last_name : '',
    email : '',
    date : '',
    password : ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  userSignUp(){
    this.SignUp.push(this.signUpObj);
    localStorage.setItem('SignUp',JSON.stringify(this.SignUp));

    this.signUpObj = {
      first_name : '',
      last_name : '',
      email : '',
      date : '',
      password : ''
    }
  }

}
