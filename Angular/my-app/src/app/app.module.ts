import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';

import { Services } from './services';
import { LoginComponents } from './pages/login';
import { AccountComponents } from './pages/profile';
import { HeaderComponent } from './shared/header/header.component';
import { RecoverUserComponent } from './pages/password-recover/view/recover-user.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponents,
    AccountComponents,
    HeaderComponent,
    RecoverUserComponent,
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
