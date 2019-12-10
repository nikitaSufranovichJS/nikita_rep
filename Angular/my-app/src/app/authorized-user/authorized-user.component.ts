import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.scss']
})
export class AuthorizedUserComponent implements OnInit {

  ngOnInit() {
  }
  public viewUser() {
    let myName = localStorage.getItem('name');
    let myEmail = localStorage.getItem('email');
    let myPassword = localStorage.getItem('password');
    console.log("Nickname : " + myName + " \nEmail : " + myEmail + " \nPassword : " + myPassword);

  }
 
  constructor(dta: UserDataService) {
    dta.printData(localStorage.getItem('name'));
    dta.printData(localStorage.getItem('email'));
    dta.printData(localStorage.getItem('password'));
  }
}

