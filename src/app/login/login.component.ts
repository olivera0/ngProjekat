import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserCredentials } from './user/user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: IUserCredentials = { username: '', password: '' };
  rememberMe: boolean = false;

  username = 'test';
  password = 'test123';

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user') || sessionStorage.getItem('user')) {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit() {
    const username = this.credentials.username.trim().toLowerCase();
    const password = this.credentials.password.trim().toLowerCase();

    if (username === 'test' && password === 'test123') {
      if (this.rememberMe) {
        localStorage.setItem('user', username);
      } else {
        sessionStorage.setItem('user', username);
      }
      this.router.navigateByUrl('/home');
    } else {
      alert('Pogrešan username ili password!');
    }
  }
}