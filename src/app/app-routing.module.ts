import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './dto/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { MovieDetailsPageComponent } from './components/movie-details/movie-details-page/movie-details-page.component';
import { SignInComponent } from './components/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/auth/components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuard]},
  { path: 'details/:idString', component: MovieDetailsPageComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{
}
