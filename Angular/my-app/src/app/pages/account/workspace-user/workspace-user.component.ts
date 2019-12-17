import { WorkspaceService } from 'src/app/services/workspace.service/workspace.service';
import { Component } from '@angular/core';

@Component({
  selector: 'workspace-user',
  templateUrl: './workspace-user.component.html',
  styleUrls: ['./workspace-user.component.scss']
})
export class WorkspaceUserComponent{
  constructor(
    public workspaceService: WorkspaceService,
  ) {
    console.log(this.workspaceService.workspaceUser);
  }
    public addUserWorkspace() :void{
      localStorage.setItem('workspaceUser', JSON.stringify(this.workspaceService.workspaceUser));
  }
}
