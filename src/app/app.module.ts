import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ChartCarouselComponent } from './components/chart-carousel/chart-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthService } from './shared/services/auth.service';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieDetailsTabsComponent } from './components/movie-details/movie-details-tabs/movie-details-tabs.component';
import { MovieDetailsPlotTabComponent } from './components/movie-details/movie-details-plot-tab/movie-details-plot-tab.component';
import { MovieDetailsPageComponent } from './components/movie-details/movie-details-page/movie-details-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    ChartCarouselComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    MovieDetailsTabsComponent,
    MovieDetailsPlotTabComponent,
    MovieDetailsPageComponent,
  ],
  entryComponents: [MovieDetailsPlotTabComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
