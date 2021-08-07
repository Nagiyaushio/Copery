import { Router } from '@angular/router';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DataService } from '@services/data.service';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { MomentDateAdapter } from '@angular/material-moment-adapter';

import * as _moment from 'moment';

const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-them-khoahoc',
  templateUrl: './them-khoahoc.component.html',
  styleUrls: ['./them-khoahoc.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ThemKhoahocComponent implements OnInit {
  @ViewChild('AddCourseForm') AddCourseForm: any;
  maDanhMucKhoaHoc: any;
  dsmkh: any;
  chuyenTrang: boolean = true;
  selectedFile: any = '';

  //localStorage lấy tài khoản
  taiKhoanString: any = localStorage.getItem('UserAdmin');
  taiKhoanArray = JSON.parse(this.taiKhoanString);

  //bắt sự kiển file img
  OnFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this._layMaLoaiKhoaHoc();
  }

  //tạo biến ngày
  ngay: any;
  ngayTao: any;
  stringNgay: any;
  addCourse(user: any) {
    //xử lý dữ liệu ngày
    // this.ngay = user.ngayTao._i;

    // this.ngayTao =
    //   this.ngay.date + '/' + this.ngay.month + '/' + this.ngay.year;

    // console.log(this.ngayTao);
    //thêm mã nhóm vào array
    user.maNhom = 'GP01';

    //thêm tài khoản người tạo vào array
    user.taiKhoanNguoiTao = this.taiKhoanArray.taiKhoan;

    // thêm hình ảnh vào array
    user.hinhAnh = this.selectedFile;

    //cập nhật lại ngày
    // user.ngayTao = String(this.ngayTao);
    user.ngayTao = '10/08/2021';

    // console.log(user);

    // append array
    var form_data = new FormData();
    for (var key in user) {
      form_data.append(key, user[key]);
    }

    // console.log(form_data);
    if (confirm('Thêm khóa học ?')) {
      this.data
        .post('QuanLyKhoaHoc/ThemKhoaHocUploadHinh', form_data)
        .subscribe((result) => {
          // console.log(result);
        });

      this.chuyenTrang = false;

      //Chuyển trang về danh sách người dùng
      // this.router.navigate(['/admin/dashboard/courses/list']);
    }
  }

  _layMaLoaiKhoaHoc() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      .subscribe((result: any) => {
        // console.log(result);
        this.dsmkh = result;
      });
  }

  //Hiển thị thông báo khi người dùng muốn rời trang
  @HostListener('window:beforeunload', ['$event'])
  canDeactivate() {
    if (this.chuyenTrang === true) {
      return !this.AddCourseForm.dirty;
    }
    return this.AddCourseForm.dirty;
  }
}
