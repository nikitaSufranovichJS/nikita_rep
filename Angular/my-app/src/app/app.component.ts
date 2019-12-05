import { Component } from '@angular/core';

export class User {
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'my-app';

  user: User = new User();
  addUser(){
      console.log(this.user);
    }
}
