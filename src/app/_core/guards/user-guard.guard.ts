import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserGuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (localStorage.getItem('Users')) {
      return true;
    }

    //chuyển hướng về trang login
    this.router.navigate(['/login']);
    return false;
  }
}
