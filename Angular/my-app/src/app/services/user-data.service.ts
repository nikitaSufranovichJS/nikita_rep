import { Injectable } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public userData: UserData = new UserData()
}
