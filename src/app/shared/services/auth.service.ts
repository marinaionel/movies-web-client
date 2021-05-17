import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService{
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  // Sign in with email/password
  public SignIn(email: string, password: string): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
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
        this.SendVerificationMail();
        this.SetUserData(result.user);
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
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  public async SignOut(): Promise<any> {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  }

  public async SendVerificationMail(): Promise<any> {
    return (await this.afAuth.currentUser)?.sendEmailVerification().then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }

  public ForgotPassword(passwordResetEmail: string): Promise<any> {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '');
    return user !== null && user.emailVerified !== false;
  }

  public GoogleAuth(): Promise<any> {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  public async token(): Promise<string> {
    return (await firebase.auth().currentUser?.getIdToken()) || '';
  }
}
