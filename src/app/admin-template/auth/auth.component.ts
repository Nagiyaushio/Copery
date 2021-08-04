import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  hide: boolean = true;
  matKhau: any;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    document.body.className = 'login-admin-background';
  }

  ngOnDestroy() {
    document.body.className = '';
  }

  login(user: any) {
    //gán mất khẩu của user
    this.matKhau = user.matKhau;

    this.data
      .post('QuanLyNguoiDung/DangNhap', user)
      .subscribe((result: any) => {
        //thêm mật khẩu vào result
        result.matKhau = this.matKhau;

        if (result.maLoaiNguoiDung === 'GV') {
          //Lưu trạng thái login
          localStorage.setItem('UserAdmin', JSON.stringify(result));

          //chuyển hướng hướng trang dashboard
          this.router.navigate(['/admin/dashboard']);
        } else {
          alert('Tài khoản không có quyền truy cập');
        }
      });
  }
}
