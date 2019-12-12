import { Input, Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})

export class User {
   @Input() public name: string;
   @Input() public email: string;
   @Input() public password: string;
  }