import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!(localStorage.getItem('user') || sessionStorage.getItem('user'));
  }

  logout(): void {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  getUser(): string | null{
    return localStorage.getItem('user') || sessionStorage.getItem('user');
  }
}