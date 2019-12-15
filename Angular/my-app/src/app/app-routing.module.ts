import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/view/landing.component';
import { AccountComponent } from './pages/account/view/account.component';


const routes: Routes = [
  { path:'', redirectTo:'/landing', pathMatch:'full' },
  { path:'landing', component: LandingComponent },
  { path:'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
