import { WorkspaceService } from 'src/app/services/workspace.service/workspace.service';
import { UserDataService } from 'src/app/services/user-data-service/user-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authorized-user',
  templateUrl: './authorized-user.component.html',
  styleUrls: ['./authorized-user.component.scss']
})
export class AuthorizedUserComponent{
  constructor(
    public readonly userDataService: UserDataService,
    public readonly workspaceService: WorkspaceService,
    ) {}
}

