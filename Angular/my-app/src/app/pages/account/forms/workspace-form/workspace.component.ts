import { Workspace } from '../../../../shared/models/workspace.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceUser {
  @Input() public workspaceUser: Workspace;
  @Output() public addUserEvent = new EventEmitter();
  
  public addUserWorkspace(): void{
    console.log(this.workspaceUser);
    this.addUserEvent.emit(this.workspaceUser);
  }
}
