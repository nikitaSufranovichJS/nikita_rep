import { Component, OnInit } from '@angular/core';


export class User {
  public name: string;
  public email: string;
  public password: string;
}

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']

})
export class LoginFormComponent implements OnInit {

  ngOnInit() {
  }
  user: User = new User();
  public addUser() {
    console.log(this.user);
    localStorage.setItem('name', this.user.name);
    localStorage.setItem('email', this.user.email);
    localStorage.setItem('password', this.user.password);
  }


}