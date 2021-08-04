import { Component, OnInit } from '@angular/core';

import { DataService } from '@services/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  matKhau: any;
  constructor(
    private data: DataService,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    document.body.className = 'login-background';
  }

  ngOnDestroy() {
    document.body.className = '';
  }

  login(user: any) {
    // gán mật khẩu của user
    this.matKhau = user.matKhau;

    this.data
      .post('QuanLyNguoiDung/DangNhap', user)
      .subscribe((result: any) => {
        //thêm mật khẩu vào result
        result.matKhau = this.matKhau;

        //Lưu trạng thái login
        localStorage.setItem('Users', JSON.stringify(result));

        this.router.navigate(['/']);

        setTimeout(() => {
          location.reload();
        }, 100);
      });
  }
}
