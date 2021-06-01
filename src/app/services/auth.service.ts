import { Injectable, NgZone, OnDestroy } from '@angular/core';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../dto/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy{
  private token!: string;
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnDestroy(): void {
    this.setLoginStatus(false);
  }

  public setLoginStatus(value: boolean): void {
    this.loggedInStatus = value;
    if (value){
      localStorage.setItem('loggedIn', 'true');
    }else{
      localStorage.setItem('loggedIn', 'false');
    }
  }

  public get loginStatus(): boolean {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  // Sign in with email/password
  public SignIn(email: string, password: string): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
          this.setUpToken();
          this.setLoginStatus(true);
          this.router.navigate(['dashboard']);
          this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  public SignUp(email: string, password: string): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.router.navigate(['sign-in']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  public AuthLogin(provider: firebase.auth.AuthProvider): Promise<any> {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.setUpToken();
          this.setLoginStatus(true);
          this.router.navigate(['dashboard']);
        });
        if (result.user !== undefined) {
          this.SetUserData(result.user);
        }
      })
      .catch((error: Error) => {
        window.alert(error);
      });
  }

  public SetUserData(user: firebase.User | null): Promise<any> | null {
    if (user == null) {
      return null;
    }
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${ user.uid }`
    );
    const userData: User = {
      accountId: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  public async SignOut(): Promise<any> {
    await this.afAuth.signOut();
    this.setLoginStatus(false);
    this.router.navigate(['sign-in']);
  }

  public ForgotPassword(passwordResetEmail: string): Promise<any> {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.router.navigate(['sign-in']);
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  public get isLoggedIn(): boolean {
    return this.loginStatus;
  }

  public GoogleAuth(): Promise<any> {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  private setUpToken(): void {
     firebase.auth().currentUser?.getIdToken().then((token: string) => {
      this.token = token;
      localStorage.setItem('token', JSON.stringify(this.token));
    });
  }

  public getToken(): string | null {
    if (this.token) {
      return this.token;
    } else {
      return JSON.parse(localStorage.getItem('token') || '');
    }
  }
}
