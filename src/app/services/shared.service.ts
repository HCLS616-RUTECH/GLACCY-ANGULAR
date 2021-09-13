import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getFullImgPath(imgPath: string): Observable<string> {
    return from(firebase.storage().ref().child(`${imgPath}`).getDownloadURL().then(url => {
      return url;
    }));
  }

}
