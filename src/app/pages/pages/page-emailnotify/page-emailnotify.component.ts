import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-page-emailnotify',
  templateUrl: './page-emailnotify.component.html',
  styleUrls: ['./page-emailnotify.component.less']
})

export class PageEmailnotifyComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });

  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const email = this.form.value.email;

    this.submitted = true;

    this.auth.sendPasswordResetEmail(email).subscribe(() => {
      this.form.reset();
      this.submitted = false;
      this.message = `Ссылка для сброса и смены пароля отпралена на ${email}.`;
    }, () => {
      this.submitted = false;
    });
  }

}
