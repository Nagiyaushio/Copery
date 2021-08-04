import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  hide: boolean = true;
  maLoaiNguoiDung: any;
  usertype: string[] = ['HV'];

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this._layThongTinNguoiDung();
  }

  //lấy thông tin trên localStorage
  dataUser: any = localStorage.getItem('Users');
  // chuyển về kiểu object
  userName = JSON.parse(this.dataUser);

  editUser(user: any) {
    //thêm tài khoản
    user.taiKhoan = this.thongTinTaiKhoan.taiKhoan;

    //thêm mã nhóm vào array
    user.maNhom = 'GP01';

    if (confirm('Bạn có chắc sửa không?')) {
      // console.log(user);
      this.data
        .put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user)
        .subscribe((result: any) => {
          // console.log(result);
        });

      // xóa localStorage để đăng nhập lại mới cập nhật tt được
      // localStorage.clear();

      // Chuyển về trang login
      // this.router.navigate(['/login']);

      setTimeout(() => {
        this.ngOnInit();
      }, 100);
    }
  }

  thongTinTaiKhoan: any;
  _layThongTinNguoiDung() {
    let thongTinTK = {
      taiKhoan: this.userName.taiKhoan,
      matKhau: this.userName.matKhau,
    };
    this.data
      .post('QuanLyNguoiDung/ThongTinTaiKhoan', thongTinTK)
      .subscribe((result) => {
        this.thongTinTaiKhoan = result;

        //loại chi tiết khóa học ghi danh
        delete this.thongTinTaiKhoan.chiTietKhoaHocGhiDanh;
        // console.log(this.thongTinTaiKhoan);
      });
  }
}
