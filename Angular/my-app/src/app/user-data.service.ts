import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public printData(arg) {
      console.log(arg);
  }
}
