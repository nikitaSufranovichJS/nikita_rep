import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';

import { Services } from './services';
import { LandingComponents } from './pages/landing';
import { AccountComponents } from './pages/account';
import { HeaderComponent } from './pages/account/header/header.component';
import { WorkspaceUserComponent } from './pages/account/workspace-user/workspace-user.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LandingComponents,
    AccountComponents,
    HeaderComponent,
    WorkspaceUserComponent,
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
