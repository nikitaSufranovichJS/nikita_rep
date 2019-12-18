import { RecoverPasswordService } from 'src/app/services/recover-password.service';
import { Component } from '@angular/core';

@Component({
  selector: 'recover-user',
  templateUrl: './recover-user.component.html'
})
export class RecoverUserComponent{
  constructor(
    public recoverService: RecoverPasswordService,
  ) {
    console.log(this.recoverService.recoverPasswordUser);
  }
    public addUserWorkspace() :void{
      localStorage.setItem('workspaceUser', JSON.stringify(this.recoverService.recoverPasswordUser));
  }
}
