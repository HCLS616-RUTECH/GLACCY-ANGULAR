import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FirebaseAuthResponse, UserLogin, UserProfile} from '../shared/interfaces';
import {environment} from '../../environments/environment';
import {from, Observable, Subject, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  get token(): string | null {
    const expDate = new Date(localStorage.getItem('firebase-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('firebase-token');
  }

  get localId(): string | null {
    return localStorage.getItem('local-id');
  }

  createUserWithEmailAndPassword(email: string, password: string): Observable<any> {
    return from(firebase.auth().createUserWithEmailAndPassword(email, password));
  }

  createUserData(newUserProfile: UserProfile): Observable<any> {
    return this.http.put(`${environment.firebaseConfig.databaseURL}/users/${newUserProfile.userUID}.json`, newUserProfile)
      .pipe(map(() => {
        return { [newUserProfile.userUID]: {
            ...newUserProfile
          }
        };
      }));
  }

  uploadAvatar(file: File, fileName: string): Observable<any> {
    return from(firebase.storage().ref().child(`avatars/${fileName}.jpg`).put(file));
  }

  updateUsersData(newUsersData: object, usersUid: string): Observable<any> {
    return this.http.patch(`${environment.firebaseConfig.databaseURL}/users/${usersUid}.json`, newUsersData);
  }

  login(user: UserLogin): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  sendPasswordResetEmail(email: string): Observable<any> {
    return from(firebase.auth().sendPasswordResetEmail(email));
  }

  signInWithEmailAndPassword(email: string, password: string): Observable<any> {
    return from(firebase.auth().signInWithEmailAndPassword(email, password));
  }

  private handleError(error: HttpErrorResponse): Observable<never>{
    const {message} = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такого email не существует');
    }
    return throwError(error);
  }

  private setToken(response: FirebaseAuthResponse | null): void {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('firebase-token', response.idToken);
      localStorage.setItem('firebase-token-exp', expDate.toString());
      localStorage.setItem('local-id', response.localId);
    } else {
      localStorage.clear();
    }
  }

}
