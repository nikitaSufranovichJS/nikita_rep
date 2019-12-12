import { User } from 'src/app/shared/models/user-data.component';
import { UserDataService } from './user-data.service';
import { UserDataSecondComponent } from './shared/models/components/user-data-second/user-data-second.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from 'src/app/shared/models/components/login-form/login-form.component';
import { AuthorizedUserComponent } from 'src/app/shared/models/components/authorized-user/authorized-user.component';

import { RouterModule, Routes} from '@angular/router';
import { AccountComponent } from 'src/app/pages/account/account.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';



const appRoutes: Routes = [
  { path:'landing', component: LandingComponent },
  { path:'account', component: AccountComponent },
  { path:'', redirectTo:'/landing', pathMatch:'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AuthorizedUserComponent,
    User,
    AccountComponent,
    LandingComponent,
    UserDataSecondComponent
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
