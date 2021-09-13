import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../../services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserLogin} from '../../../../../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;
  localId: string | null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      switch (true) {
        case params['loginAgain']:
          this.message = 'Введите данные.';
          break;
        case params['authFailed']:
          this.message = 'Ссесия истекла, введите данные заного.';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    if (localStorage.getItem('local-id')) {
      this.localId = localStorage.getItem('local-id');
    } else {
      this.localId = null;
    }

  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: UserLogin = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      if (localStorage.getItem('local-id')) {
        this.localId = localStorage.getItem('local-id');
      }
      this.router.navigate(['account', this.localId]).then();
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }

  enterAccount(event: Event): void {
    event.preventDefault();
    if (this.localId) {
      this.router.navigate(['/account', this.localId]).then();
    } else {
      this.router.navigate(['']).then();
    }
  }

  logout(event: Event): void {
    event.preventDefault();
    const regexp = /account/i;
    this.auth.logout();
    this.localId = null;
    if (regexp.test(this.router.url)) {
      this.router.navigate(['']).then();
    }
  }

}
