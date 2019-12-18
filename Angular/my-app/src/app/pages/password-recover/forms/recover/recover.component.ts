import { RecoverPassword } from '../../../../shared/models/recover-password.model';

import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent {
  @Input() public recoverPasswordUser: RecoverPassword;
  @Output() public addUserEvent = new EventEmitter();
  
  constructor(
    private router: Router
  ) {}

  public addUserWorkspace(): void{
    console.log(this.recoverPasswordUser);
    this.addUserEvent.emit(this.recoverPasswordUser);
    this.router.navigate(['/profile'])
  }
}
