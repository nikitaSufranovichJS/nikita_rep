import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data-service/user-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {
  constructor(
    public userDataService: UserDataService,
  ) {}
  public addUser() :void {
    localStorage.setItem('userData', JSON.stringify(this.userDataService.userData));
  }
}
 