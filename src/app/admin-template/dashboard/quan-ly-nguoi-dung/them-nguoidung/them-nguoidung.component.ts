import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-them-nguoidung',
  templateUrl: './them-nguoidung.component.html',
  styleUrls: ['./them-nguoidung.component.scss'],
})
export class ThemNguoidungComponent implements OnInit {
  @ViewChild('AddUserForm') AddUserForm: any;
  hide: boolean = true;
  maLoaiNguoiDung: any;
  //tạo 2 loại người dùng
  usertype: string[] = ['HV', 'GV'];
  chuyenTrang: boolean = true;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {}

  addUser(user: any) {
    //thêm mã nhóm vào array
    user.maNhom = 'GP01';

    if (confirm('Thêm người dùng?')) {
      this.data
        .post('QuanLyNguoiDung/ThemNguoiDung', user)
        .subscribe((result: any) => {
          // console.log(result);
        });
      // console.log(user);

      this.chuyenTrang = false;

      //Chuyển trang về danh sách người dùng
      this.router.navigate(['/admin/dashboard/users/list']);
    }
  }

  //Hiển thị thông báo khi người dùng muốn rời trang
  @HostListener('window:beforeunload', ['$event'])
  canDeactivate() {
    if (this.chuyenTrang === true) {
      return !this.AddUserForm.dirty;
    }
    return this.AddUserForm.dirty;
  }
}
