import { RecoverPassword } from '../../../../shared/models/recover-password.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class Recover {
  @Input() public recoverPasswordUser: RecoverPassword;
  @Output() public addUserEvent = new EventEmitter();
  
  public addUserWorkspace(): void{
    console.log(this.recoverPasswordUser);
    this.addUserEvent.emit(this.recoverPasswordUser);
  }
}
