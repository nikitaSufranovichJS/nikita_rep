import { UserDataService } from 'src/app/services/user-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  public myName: string;
  public myEmail: string;
  public myPassword: string;
  
  constructor(
    public userDataService: UserDataService,
  ) { }

  public addUser(): void {
    this.myName = this.userDataService.userData.name;
    this.myEmail = this.userDataService.userData.email;
    this.myPassword = this.userDataService.userData.password;
    localStorage.setItem('userData', JSON.stringify(this.userDataService.userData));
  }
}
 