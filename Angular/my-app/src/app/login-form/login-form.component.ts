import { Component, OnInit } from '@angular/core';


export class User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
 
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user: User = new User();
  addUser(){ 
      document.write(this.user.name);
    }
  }


