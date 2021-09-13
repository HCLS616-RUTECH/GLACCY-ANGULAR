import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserLogin, UserProfile} from '../../../shared/interfaces';
import {AuthService} from '../../../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.less']
})
export class PageLoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;
  avatarFile: File;

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      avatar: new FormControl(null),
      nickname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      birthDate: new FormControl(null),
      phoneNumber: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

  }

  onFileChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;
    if (fileList) {
      this.avatarFile = fileList[0];
    }
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const newUser: UserLogin = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.createUserWithEmailAndPassword(newUser.email, newUser.password).subscribe((userCredential) => {
      const user = userCredential.user;

      if (newUser.email !== user.email) {
        this.message = 'При загрузке данных возникла ошибка';
        return;
      }

      const newUserProfile: UserProfile = {
        userUID: user.uid,
        nickname: this.form.value.nickname,
        birthDate: this.form.value.birthDate || '-',
        phoneNumber: this.form.value.phoneNumber || '-',
        registrationDate: new Date().toString(),
        avatar: (this.avatarFile) ? `${user.uid}.jpg` : null
      };

      this.auth.createUserData(newUserProfile).subscribe(() => {
        this.form.reset();
        this.message = 'Вы были успешно зарегистрированы, теперь вы можете войти в свой аккаунт';

        if (this.avatarFile) {
          this.auth.uploadAvatar(this.avatarFile, newUserProfile.userUID);
        }
      });

    });

  }


}
