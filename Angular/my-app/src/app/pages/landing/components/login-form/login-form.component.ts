import { UserDataService } from 'src/app/services/user-data-service/user-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'login-form'
})
export class LoginFormComponent {
  constructor(
    public userDataService: UserDataService,
  ) {}

}