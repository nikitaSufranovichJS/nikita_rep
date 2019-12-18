import { RecoverPasswordService } from 'src/app/services/recover-password.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.scss']
})
export class AuthorizedUserComponent {
  constructor(
    public readonly userDataService: UserDataService,
    public readonly recoverService: RecoverPasswordService,
    ) {}
}

