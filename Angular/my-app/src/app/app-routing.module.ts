import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/view/landing.component';
import { AccountComponent } from './pages/account/view/account.component';
import { UserDataSecondComponent } from './pages/account/forms/addWorkspaceForm/user-data-second.component';


const routes: Routes = [
  { path:'', redirectTo:'/landing', pathMatch:'full' },
  { path:'user-data-second',component: UserDataSecondComponent },
  { path:'landing', component: LandingComponent },
  { path:'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
