import { UserData } from 'src/app/shared/models/user-data.model';
import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  @Input() public userData: UserData;
  @Output() public addUserEvent = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  public addUser(): void {
    this.addUserEvent.emit(this.userData);
    this.router.navigate(['/recover']);
  }
}