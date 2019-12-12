import { User } from 'src/app/shared/models/user-data.component';
import { UserDataService } from './user-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from 'src/app/shared/models/components/login-form/login-form.component';
import { AuthorizedUserComponent } from 'src/app/shared/models/components/authorized-user/authorized-user.component';


import { RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  { path:'login-form', component: LoginFormComponent },
  { path:'authorized-user', component: AuthorizedUserComponent },
  { path:'', redirectTo:'/login-form', pathMatch:'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AuthorizedUserComponent,
    User
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
     appRoutes),

  ],
  exports:[
    [RouterModule]
  ],
  providers: [
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
