import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {Observable} from 'rxjs';
import {UserProfile} from '../../../shared/interfaces';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styleUrls: ['./page-account.component.less']
})
export class PageAccountComponent implements OnInit {

  user$: Observable<UserProfile>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.route.params.pipe(switchMap((params: Params) => {
      return this.userService.getUserByLocalID(params.localId);
    }));

  }
}
