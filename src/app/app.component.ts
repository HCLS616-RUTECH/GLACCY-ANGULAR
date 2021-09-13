import {Component, OnInit} from '@angular/core';
import firebase from 'firebase';
import {AngularFireStorage} from '@angular/fire/storage';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  // qwe;

  // probeArray: object[] = [];
  // title = 'GllacyAngular';
  // img = '#';

  // ddd = firebase.storage().ref().child('probe').getDownloadURL().then(url => {
  //   console.log(url);
  // });

  constructor(private http: HttpClient, private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    // this.getImgs();

    // firebase.storage().ref().child('probe').child('49_Edp.jpg').getDownloadURL().then(url => {
    //   this.img = url;
    // });

    // firebase.storage().ref().child('probe').listAll().then(value => {
    //   let weq = [];
    //   // console.log(value.items[0].fullPath);
    //   // value.prefixes.forEach(item => {
    //   //   weq.push(item);
    //   // });
    //   // console.log(weq);
    //   // console.log(value.prefixes);
    //   weq = value.items.map(item => {
    //     return item.fullPath;
    //   });
    //   this.qwe = weq;
    //   // console.log(weq);
    //   // return weq;
    // });

    // console.log(this.qwe);
    // console.log(this.storage);
    // console.log(this.probe);
    // console.log(this.getImgUrl().pipe());
    // console.log(this.ddd);
    // this.img = this.ppp;
    // console.log(this.http.get(`${environment.firebaseConfig.storageBucket}/probe`));

    // this.getAll().subscribe(arr => {
    //   // console.log(arr);
    //   const qqq = arr.slice();
    //   this.probeArray = qqq;
    //   console.log(this.probeArray);
    // });
    // console.log(this.probeArray);
  }

  // getImgs(): void {
  //   firebase.storage().ref().child('probe').listAll().then(value => {
  //     this.qwe = value.items.map(item => {
  //       return item.fullPath;
  //     });
  //     console.log(this.qwe);
  //   });
  // }

  // getImgUrl(): Observable<object> {
  //   return this.http.get(`${environment.firebaseConfig.storageBucket}.json`);
  // }

  // getAll(): Observable<object[]> {
  //   return this.http.get(`${environment.firebaseConfig.databaseURL}/probe.json`)
  //     .pipe(map((response: {[key: string]: any}) => {
  //       return Object
  //         .keys(response)
  //         .map(key => ({
  //           ...response[key]
  //         }));
  //     }));
  // }

}
