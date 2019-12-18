import { UserData } from 'src/app/shared/models/user-data.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  @Input() public userData: UserData;
  @Output() public addUserEvent = new EventEmitter();

  public addUser(): void{
    console.log(this.userData);
    this.addUserEvent.emit(this.userData);
  }
}