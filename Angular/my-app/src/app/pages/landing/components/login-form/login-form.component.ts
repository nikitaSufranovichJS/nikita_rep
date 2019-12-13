import { UserDataService } from 'src/app/services/user-data-service/user-data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']

})
export class LoginFormComponent {
  constructor(
    public userDataService: UserDataService,
  ) {}
  
  public addUser() {
    localStorage.setItem('userData', JSON.stringify(this.userDataService.userData));
  }
}