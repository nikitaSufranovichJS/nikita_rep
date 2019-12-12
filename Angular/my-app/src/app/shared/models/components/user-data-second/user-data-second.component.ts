import { UserDataSecondService } from 'src/app/user-data-second.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data-second',
  templateUrl: './user-data-second.component.html',
  styleUrls: ['./user-data-second.component.scss']
})
export class UserDataSecondComponent implements OnInit {

  constructor(
    private userDataSecondService: UserDataSecondService,
    ) {}
  

  ngOnInit() {
  }

}
