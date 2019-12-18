import { UserDataService } from 'src/app/services/user-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  constructor(
    public userDataService: UserDataService,
  ) {}

  public addUser(): void {
    localStorage.setItem('userData', JSON.stringify(this.userDataService.userData));
  }
}
 