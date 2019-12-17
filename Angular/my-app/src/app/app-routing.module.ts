import { LandingComponent } from './pages/landing/view/landing.component';
import { AccountComponent } from './pages/account/view/account.component';
import { WorkspaceUserComponent } from './pages/account/workspace-user/workspace-user.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo:'/landing', pathMatch:'full' },
  { path:'landing', component: LandingComponent },
  { path:'workspace', component: WorkspaceUserComponent },
  { path:'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
