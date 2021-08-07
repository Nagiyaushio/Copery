import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@services/data.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  constructor(
    private data: DataService,
    private orderPipe: OrderPipe,
    public dialog: MatDialog
  ) {
    // console.log(this.userData);
  }

  dataUser: any = localStorage.getItem('Users');

  userData = JSON.parse(this.dataUser);

  p: any = 1;

  ngOnInit(): void {
    this._thongTinTaiKhoan();
  }

  noCourse: boolean = true;
  yesCourse: boolean = false;
  thongTinND: any;

  chiTietKhoaHocGD: any = [];

  _thongTinTaiKhoan() {
    let taiKhoan = this.userData.taiKhoan;

    let dataUp = {
      taiKhoan: taiKhoan,
    };

    this.data
      .post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', dataUp)
      .subscribe((result) => {
        this.thongTinND = result;
        // console.log(result);

        //lọc mã khóa học
        let maKhoaHocArray = this.thongTinND.map((a: any) => a.maKhoaHoc);

        // console.log(maKhoaHocArray);
        for (let i = 0; i < maKhoaHocArray.length; i++) {
          let mangMaKHGD = maKhoaHocArray[i];

          this.data
            .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${mangMaKHGD}`)
            .subscribe((result) => {
              let dsKHGH = result;

              // console.log(dsKHGH);

              this.mangKhoaHocGhiDanh(dsKHGH);
            });

          //điều kiện để ẩn
          if (i >= 0) {
            this.noCourse = false;
            this.yesCourse = true;
          } else {
            this.noCourse = true;
            this.yesCourse = false;
          }
        }
      });
  }

  //lấy mảng này show ra UI
  dsKHGhiDanh: any = [];

  mangKhoaHocGhiDanh(dskh: any) {
    this.dsKHGhiDanh.push(dskh);
    // console.log(this.dsKHGhiDanh);
  }

  order: string = 'info.fulname';
  reverse: boolean = false;
  sortedCollection: any = [];
  setOrder(value: string) {
    this.sortedCollection = this.orderPipe.transform(this.dsKHGhiDanh);

    this.order = value;

    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }

  deleteSU(maKhoaHoc: any) {
    // console.log(maKhoaHoc);

    if (confirm('Hủy ghi danh khóa học?')) {
      let taiKhoan = this.userData.taiKhoan;

      let deleteOb = {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: taiKhoan,
      };

      this.data
        .post('QuanLyKhoaHoc/HuyGhiDanh', deleteOb)
        .subscribe((reuslt) => {});

      location.reload();
    }
  }
}
