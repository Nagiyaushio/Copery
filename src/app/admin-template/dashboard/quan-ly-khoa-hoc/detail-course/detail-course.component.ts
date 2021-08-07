import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { OrderPipe } from 'ngx-order-pipe';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private orderPipe: OrderPipe,
    public dialog: MatDialog,
    private router: Router
  ) {}

  khoaHoc: any;
  danhSachHocVienChoXetDuyet: any;
  danhSachHocVienDaGhiDanh: any;
  p: any = 1;
  p1: any = 1;

  ngOnInit(): void {
    this._LayThongTinKhoaHoc();
    this._LayDanhSachHocVienChoXetDuyet();
    this._LayDanhSachHocVienDaGhiDanh();
  }

  accept(user: any) {
    const taiKhoan = user.taiKhoan;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    let chapNhanGhiDanh = {
      maKhoaHoc: id,
      taiKhoan: taiKhoan,
    };

    if (confirm('Ghi danh tài khoản?')) {
      this.data
        .post('QuanLyKhoaHoc/GhiDanhKhoaHoc', chapNhanGhiDanh)
        .subscribe((result) => {});

      //
      setTimeout(() => {
        this._LayDanhSachHocVienChoXetDuyet();
        this._LayDanhSachHocVienDaGhiDanh();
      }, 1000);
    }
  }

  refuse(user: any) {
    const taiKhoan = user.taiKhoan;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    let huyGhiDanh = {
      maKhoaHoc: id,
      taiKhoan: taiKhoan,
    };

    if (confirm('Từ chối ghi danh tài khoản?')) {
      this.data
        .post('QuanLyKhoaHoc/HuyGhiDanh', huyGhiDanh)
        .subscribe((result) => {});

      //
      setTimeout(() => {
        this._LayDanhSachHocVienChoXetDuyet();
      }, 1000);
    }
  }

  _LayThongTinKhoaHoc() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data
      .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
      .subscribe((result) => {
        this.khoaHoc = result;
      });
  }

  _LayDanhSachHocVienChoXetDuyet() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    let maLoai = {
      maKhoaHoc: id,
    };

    // console.log(id);
    this.data
      .post('QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet', maLoai)
      .subscribe((result) => {
        this.danhSachHocVienChoXetDuyet = result;
        // console.log(this.danhSachHocVienChoXetDuyet);
      });
  }

  _LayDanhSachHocVienDaGhiDanh() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    let maLoai = {
      maKhoaHoc: id,
    };

    // console.log(id);
    this.data
      .post('QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc', maLoai)
      .subscribe((result) => {
        this.danhSachHocVienDaGhiDanh = result;
        // console.log(this.danhSachHocVienDaGhiDanh);
      });
  }

  sortedCollection: any = [];
  order: string = 'info.fulname';
  reverse: boolean = false;

  setOrder(value: string) {
    this.sortedCollection = this.orderPipe.transform(
      this.danhSachHocVienChoXetDuyet
    );

    this.order = value;

    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }

  setOrder1(value: string) {
    this.sortedCollection = this.orderPipe.transform(
      this.danhSachHocVienDaGhiDanh
    );

    this.order = value;

    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }
}
