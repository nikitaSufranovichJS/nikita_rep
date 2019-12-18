import { LandingComponent } from './pages/login/view/landing.component';
import { AccountComponent } from './pages/profile/view/account.component';
import { RecoverUserComponent } from './pages/password-recover/view/recover-user.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'login', component: LandingComponent },
  { path:'recover', component: RecoverUserComponent },
  { path:'profile', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
