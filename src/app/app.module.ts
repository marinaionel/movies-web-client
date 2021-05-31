import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ChartCarouselComponent } from './components/chart-carousel/chart-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';
import { ForgotPasswordComponent } from './components/auth/components/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/auth/components/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/components/sign-in/sign-in.component';
import { MovieDetailsTabsComponent } from './components/movie-details/movie-details-tabs/src/movie-details-tabs.component';
import { MovieDetailsPlotTabComponent } from './components/movie-details/movie-details-tabs/movie-details-plot-tab/movie-details-plot-tab.component';
import { MovieDetailsPageComponent } from './components/movie-details/movie-details-page/movie-details-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomSpinnerComponent } from './components/custom-spinner/custom-spinner.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MovieDetailsReviewsTabComponent } from './components/movie-details/movie-details-tabs/movie-details-reviews-tab/src/movie-details-reviews-tab.component';
import { MovieDetailsMoreDetailsTabComponent } from './components/movie-details/movie-details-tabs/movie-details-more-details-tab/movie-details-more-details-tab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieStarsRatingComponent } from './components/movie-details/movie-details-tabs/movie-details-reviews-tab/movie-stars-rating/movie-stars-rating.component';
import { MovieDetailsCrewMembersTabComponent } from './components/movie-details/movie-details-tabs/movie-details-crew-members-tab/src/movie-details-crew-members-tab.component';
import { CrewGenericPanelComponent } from './components/movie-details/movie-details-tabs/movie-details-crew-members-tab/crew-generic-panel/crew-generic-panel.component';
import { DetailsGenericPanelComponent } from './components/movie-details/movie-details-tabs/movie-details-more-details-tab/details-generic-panel/details-generic-panel.component';
import { ExpandablePanelHeaderComponent } from './components/movie-details/movie-details-tabs/expandable-panel-header/expandable-panel-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from './services/AuthInterceptor';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

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
    OverlayModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    ChartCarouselComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    MovieDetailsTabsComponent,
    MovieDetailsPlotTabComponent,
    MovieDetailsPageComponent,
    CustomSpinnerComponent,
    MovieDetailsReviewsTabComponent,
    MovieDetailsMoreDetailsTabComponent,
    MovieStarsRatingComponent,
    MovieDetailsCrewMembersTabComponent,
    CrewGenericPanelComponent,
    DetailsGenericPanelComponent,
    ExpandablePanelHeaderComponent,
    ToolbarComponent
  ],
  entryComponents: [MovieDetailsPlotTabComponent],
  providers: [
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
