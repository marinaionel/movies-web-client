import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Routes } from '../dto/Routes';
import { catchError } from 'rxjs/operators';
import { MovieReview } from '../dto/MovieReview';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewManagerService{

  constructor(private client: HttpClient, private auth: AuthService) {
  }

  public postReview(review: MovieReview): void {
    this.client.post(Routes.POST_REVIEW, review, { observe: 'response' }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 401) {
          this.auth.SignOut();
        }
        return EMPTY;
      })
    ).subscribe(response => {
      // console.log(response.status);
    });
  }
}
