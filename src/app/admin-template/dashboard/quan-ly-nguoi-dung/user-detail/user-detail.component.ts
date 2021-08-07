import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';
import { OrderPipe } from 'ngx-order-pipe';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private orderPipe: OrderPipe,
    public dialog: MatDialog
  ) {}

  nguoiDung: any;
  danhSachKhoaHocChoXetDuyet: any;
  danhSachKhoaHocDaXetDuyet: any;
  p: any = 1;
  p1: any = 1;
  ngOnInit(): void {
    this._layThongTinNguoiDung();
    this._danhSachKhoaHocChoXetDuyet();
    this._danhSachKhoaHocDaXetDuyet();
  }

  accept(khoaHoc: any) {
    const maKhoaHoc = khoaHoc.maKhoaHoc;
    const taiKhoan = this.activatedRoute.snapshot.paramMap.get('id');

    let chapNhanGhiDanh = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: taiKhoan,
    };

    this.data
      .post('QuanLyKhoaHoc/GhiDanhKhoaHoc', chapNhanGhiDanh)
      .subscribe((result) => {});

    //
    setTimeout(() => {
      this._danhSachKhoaHocChoXetDuyet();
      this._danhSachKhoaHocDaXetDuyet();
    }, 1000);
  }

  refuse(khoaHoc: any) {
    const maKhoaHoc = khoaHoc.maKhoaHoc;
    const taiKhoan = this.activatedRoute.snapshot.paramMap.get('id');

    let huyGhiDanh = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: taiKhoan,
    };

    this.data
      .post('QuanLyKhoaHoc/HuyGhiDanh', huyGhiDanh)
      .subscribe((result) => {});

    //
    setTimeout(() => {
      this._danhSachKhoaHocChoXetDuyet();
    }, 1000);
  }

  _layThongTinNguoiDung() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data
      .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${id}`)
      .subscribe((result) => {
        this.nguoiDung = result;
        // console.log(result);
      });
  }

  _danhSachKhoaHocChoXetDuyet() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    let taiKhoan = {
      taiKhoan: id,
    };

    // console.log(id);
    this.data
      .post('QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet', taiKhoan)
      .subscribe((result) => {
        this.danhSachKhoaHocChoXetDuyet = result;
        // console.log(this.danhSachKhoaHocDaXetDuyet);
      });
  }

  _danhSachKhoaHocDaXetDuyet() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    let taiKhoan = {
      taiKhoan: id,
    };

    // console.log(id);
    this.data
      .post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', taiKhoan)
      .subscribe((result) => {
        this.danhSachKhoaHocDaXetDuyet = result;
        // console.log(this.danhSachKhoaHocDaXetDuyet);
      });
  }

  sortedCollection: any = [];
  order: string = 'info.fulname';
  reverse: boolean = false;

  setOrder(value: string) {
    this.sortedCollection = this.orderPipe.transform(
      this.danhSachKhoaHocChoXetDuyet
    );

    this.order = value;

    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }

  setOrder1(value: string) {
    this.sortedCollection = this.orderPipe.transform(
      this.danhSachKhoaHocDaXetDuyet
    );

    this.order = value;

    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }
}
