import { UserDataService } from 'src/app/user-data.service';
import { UserDataSecondService } from 'src/app/user-data-second.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.scss']
})
export class AuthorizedUserComponent implements OnInit {
  public myName: string;
  public myEmail: string;
  public myPassword: string;
  
  constructor(
    public readonly userDataService: UserDataService,
    public readonly userDataSecondService: UserDataSecondService
    ) {}
  
  ngOnInit() {
    this.myName = localStorage.getItem('name');
    this.myEmail = localStorage.getItem('email');
    this.myPassword = localStorage.getItem('password');
  }
}

