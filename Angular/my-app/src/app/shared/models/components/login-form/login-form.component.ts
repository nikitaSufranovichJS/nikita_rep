import { UserDataService } from 'src/app/user-data.service';
import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user-data.component';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']

})
export class LoginFormComponent implements OnInit {

  constructor(
    private userDataService: UserDataService,
  ) {}

  ngOnInit() {
  }
   user: User = new User();

  public addUser() {
    this.userDataService.userData = this.user;
    console.log(this.userDataService.userData);
    localStorage.setItem('name', this.user.name);
    localStorage.setItem('email', this.user.email);
    localStorage.setItem('password', this.user.password);
  }
}