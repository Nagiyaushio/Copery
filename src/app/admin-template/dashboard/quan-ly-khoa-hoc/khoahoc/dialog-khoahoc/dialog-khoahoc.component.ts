import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';
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
  selector: 'app-dialog-khoahoc',
  templateUrl: './dialog-khoahoc.component.html',
  styleUrls: ['./dialog-khoahoc.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DialogKhoahocComponent implements OnInit {
  khoaHoc: any;
  hide: boolean = true;
  maLoaiNguoiDung: any;

  dsmkh: any;
  maDanhMucKhoaHoc: any;

  //localStorage lấy tài khoản
  taiKhoanString: any = localStorage.getItem('UserAdmin');
  taiKhoanArray = JSON.parse(this.taiKhoanString);

  selectedFile: any = '';
  //bắt sự kiển file img
  OnFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  constructor(private data: DataService, private shareData: ShareDataService) {
    // console.log(this.taiKhoanArray.accessToken);
  }

  ngOnInit(): void {
    this.shareData.shareInfo.subscribe((result: any) => {
      this.khoaHoc = result;
      // console.log(result);
    });

    this._layMaLoaiKhoaHoc();
  }

  //tạo biến ngày
  ngay: any;
  ngayTao: any;

  editCourse(user: any) {
    //xử lý dữ liệu ngày
    // this.ngay = user.ngayTao._i;
    // this.ngayTao =
    //   this.ngay.date + '/' + this.ngay.month + '/' + this.ngay.year;

    //thêm mã khóa học
    user.maKhoaHoc = this.khoaHoc.maKhoaHoc;

    //thêm mã nhóm vào array
    user.maNhom = 'GP01';

    //thêm tài khoản người tạo vào array
    user.taiKhoanNguoiTao = this.taiKhoanArray.taiKhoan;

    //cập nhật lại ngày
    // user.ngayTao = this.ngayTao;
    user.ngayTao = '10/08/2021';

    // user.danhGia = this.khoaHoc
    // console.log(user.luotXem);

    // console.log(user);
    // append array

    if (confirm('Bạn có chắc sửa không?')) {
      this.data
        .put('QuanLyKhoaHoc/CapNhatKhoaHoc', user)
        .subscribe((result: any) => {
          // console.log(result);
        });

      if (confirm('Bạn có muốn thay đổi hình ảnh')) {
        // thêm hình ảnh vào array
        user.hinhAnh = this.selectedFile;

        let form_data = new FormData();
        for (let key in user) {
          form_data.append(key, user[key]);
        }

        this.data
          .post('QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', form_data)
          .subscribe((result: any) => {
            // console.log(result);
          });

        setTimeout(() => {
          location.reload();
        }, 100);
      }
    }

    //        this.taiKhoanArray.accessToken
  }

  _layMaLoaiKhoaHoc() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      .subscribe((result: any) => {
        // console.log(result);
        this.dsmkh = result;
      });
  }
}
