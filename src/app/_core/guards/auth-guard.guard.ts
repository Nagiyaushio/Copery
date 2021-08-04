import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('UserAdmin')) {
      return true;
    }
    //chuyển hướng về trang auth
    this.router.navigate(['/admin/auth']);
    return false;
  }
}
