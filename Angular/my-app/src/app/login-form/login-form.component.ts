import { Component, OnInit } from '@angular/core';

export class User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user: User = new User();
  addUser(){
      console.log(this.user);
    }
}

