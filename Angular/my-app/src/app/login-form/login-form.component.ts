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
      alert(" Name : "+ this.user.name +"\n Email: " +this.user.email +"\n Password: "+ this.user.password);
    }
  }


