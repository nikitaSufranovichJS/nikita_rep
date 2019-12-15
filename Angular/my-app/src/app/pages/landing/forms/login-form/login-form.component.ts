import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data.model';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
// todo: read about lificycles angular
export class LoginFormComponent {
  // todo input output
  @Input() public userData: UserData;
  @Output() public childEvent = new EventEmitter();

  public addUser(): void {
    console.log(this.userData);
    localStorage.setItem('userData', JSON.stringify(this.userData)); 
    // todo: redirect to next page
  }
} 