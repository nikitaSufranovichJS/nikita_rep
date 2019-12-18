import { Injectable } from '@angular/core';
import { RecoverPassword } from '../shared/models/recover-password.model';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {
  public recoverPasswordUser: RecoverPassword = new RecoverPassword();
}

