import { Injectable } from '@angular/core';
import { Workspace } from './../../shared/models/workspace.model';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  public workspaceUser: Workspace = new Workspace();
}
