import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../_core/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: any;
  hide: boolean = true;
  maLoaiNguoiDung: any;
  chuyenTrang: boolean = true;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    document.body.className = 'register-background';
  }

  ngOnDestroy() {
    document.body.className = '';
  }

  register(user: any) {
    //Thêm mã nhóm
    user.maNhom = 'GP01';
    //Thêm người dùng
    user.maLoaiNguoiDung = 'HV';

    if (confirm('Đăng ký người dùng?')) {
      this.data
        .post('QuanLyNguoiDung/DangKy', user)
        .subscribe((result: any) => {
          // console.log(result);
        });
      // console.log(user);

      this.chuyenTrang = false;

      //chuyển hướng hướng trang dashboard
      this.router.navigate(['/login']);
    }
  }

  //Hiển thị thông báo khi người dùng muốn rời trang
  @HostListener('window:beforeunload', ['$event'])
  canDeactivate() {
    if (this.chuyenTrang === true) {
      return !this.registerForm.dirty;
    }
    return this.registerForm.dirty;
  }
}
