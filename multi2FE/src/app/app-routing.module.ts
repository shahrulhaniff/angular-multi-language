import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';

const routes: Routes = [
  {
    path: "home",
    //canActivate: [AuthenticationService],
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "dashboard",
    canActivate: [AuthenticationService],
    loadChildren: () =>
      import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
