import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';

import { AccountComponent } from 'src/app/pages/account/view/account.component';
import { LandingComponent } from 'src/app/pages/landing/view/landing.component';
import { Services } from './services';
import { LandingComponents } from './pages/landing';
import { AccountComponents } from './pages/account';
import { HeaderComponent } from './pages/account/header/header.component';

// todo: replace to app route
const appRoutes: Routes = [
  { path:'', redirectTo:'/landing', pathMatch:'full' },
  { path:'landing', component: LandingComponent },
  { path:'account', component: AccountComponent },
]

@NgModule({
  declarations: [ 
    AppComponent,
    LandingComponents,
    AccountComponents,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[
    [RouterModule]
  ],
  providers: [
    Services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
