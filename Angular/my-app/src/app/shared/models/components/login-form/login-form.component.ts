import { UserDataService } from 'src/app/user-data.service';
import { Component } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data.component';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']

})
export class LoginFormComponent {
  private user: UserData = new UserData();

  constructor(
    private userDataService: UserDataService,
  ) {}
  
  public addUser() {
    this.userDataService.userData = this.user;
    console.log(this.userDataService.userData);
    localStorage.setItem('name', this.user.name);
    localStorage.setItem('email', this.user.email);
    localStorage.setItem('password', this.user.password);
  }
}