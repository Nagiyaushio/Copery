import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-thong-tin-quan-tri',
  templateUrl: './thong-tin-quan-tri.component.html',
  styleUrls: ['./thong-tin-quan-tri.component.scss'],
})
export class ThongTinQuanTriComponent implements OnInit {
  hide: boolean = true;
  maLoaiNguoiDung: any;
  usertype: string[] = ['GV'];

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this._layThongTinNguoiDung();
  }

  //lấy thông tin trên localStorage
  name: any = localStorage.getItem('UserAdmin');
  //Đổi kiểu string sang object
  adminNameLocal = JSON.parse(this.name);

  adminName: any;
  _layThongTinNguoiDung() {
    let thongTinTK = {
      taiKhoan: this.adminNameLocal.taiKhoan,
      matKhau: this.adminNameLocal.matKhau,
    };
    this.data
      .post('QuanLyNguoiDung/ThongTinTaiKhoan', thongTinTK)
      .subscribe((result) => {
        this.adminName = result;

        //loại chi tiết khóa học ghi danh
        delete this.adminName.chiTietKhoaHocGhiDanh;
        // console.log(this.thongTinTaiKhoan);
      });
  }
  editUser(user: any) {
    //thêm mã nhóm vào array
    user.taiKhoan = this.adminName.taiKhoan;
    user.maNhom = 'GP01';

    if (confirm('Bạn có chắc sửa không?')) {
      // console.log(user);
      this.data
        .put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user)
        .subscribe((result: any) => {
          console.log(result);
        });

      setTimeout(() => {
        location.reload();
      }, 300);

      // this.ngOnInit();
      // xóa localStorage để đăng nhập lại mới cập nhật tt được
      // localStorage.clear();

      //Chuyển về trang login
      // this.router.navigate(['/admin/auth']);
    }
  }
}
