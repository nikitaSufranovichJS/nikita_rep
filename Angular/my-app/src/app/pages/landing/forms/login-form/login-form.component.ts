import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data.model';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
// todo: read about lificycles angular
export class LoginFormComponent implements OnInit {
  // todo input output
  @Input() public userData: UserData;

  public ngOnInit(): void {
    console.log(this.userData);
  }

  public addUser(): void {
    /* localStorage.setItem('userData', JSON.stringify(this.userDataService.userData)); */
    // todo: redirect to next page
  }
} 