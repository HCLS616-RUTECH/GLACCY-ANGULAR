import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserProfile} from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByLocalID(localID: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.firebaseConfig.databaseURL}/users/${localID}.json`).pipe(
      map((userProfile: UserProfile) => {
        return {
          ...userProfile
        };
      }));
  }

}
