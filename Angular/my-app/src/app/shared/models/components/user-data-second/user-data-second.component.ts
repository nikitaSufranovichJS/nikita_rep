import { UserDataSecondService } from 'src/app/user-data-second.service';
import { Component } from '@angular/core';
import { secondUser } from "../../secondUser";

@Component({
  selector: 'user-data-second',
  templateUrl: './user-data-second.component.html',
  styleUrls: ['./user-data-second.component.scss']
})
export class UserDataSecondComponent{

  constructor(
    private userDataSecondService: UserDataSecondService,
  ) {}
 
  user: secondUser = new secondUser();
  public addUser() {
    this.userDataSecondService.userDataSecond = this.user;
    console.log(this.userDataSecondService.userDataSecond);
  }
}
