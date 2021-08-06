import { TypeComponent } from './../../type/type.component';
import { CartService } from '@services/cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-find-khoahoc',
  templateUrl: './find-khoahoc.component.html',
  styleUrls: ['./find-khoahoc.component.scss'],
})
export class FindKhoahocComponent implements OnInit {
  @Input() khoaHoc: any;
  @Output() maKhoaHoc = new EventEmitter();

  updateUrl(e: any) {
    if (e.type === 'error') {
      this.khoaHoc.hinhAnh = '../assets/images/error-img.png';
    }
  }
  constructor(
    private shareData: ShareDataService,
    private cartService: CartService,
    private data: DataService
  ) {
    if (this.khoaHoc !== undefined) {
      this.cartService.cartItemList.map((a: any) => {
        if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
          this.buttonGone = false;
          this.buttonShow = true;
        }
      });
    }
  }

  ngOnInit(): void {
    this.cartService.cartItemList.map((a: any) => {
      if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
        this.buttonGone = false;
        this.buttonShow = true;

        // console.log(2);
      }
    });

    this._layThongTinND();
  }
  xemNhanh() {
    this.shareData.sharingData(this.khoaHoc);
  }

  buttonGone: boolean = true;
  buttonShow: boolean = false;
  buttonDetail: boolean = false;
  buttonInter() {
    if (
      localStorage.getItem('Users') === null &&
      localStorage.getItem('UserAdmin') === null
    ) {
      alert('Vui lòng đăng nhập tài khoản');
    } else {
      this.cartService.addtoCart(this.khoaHoc);

      this.cartService.cartItemList.map((a: any) => {
        if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
          this.buttonGone = false;
          this.buttonShow = true;

          // console.log(1);
          this.maKhoaHoc.emit(this.khoaHoc.maKhoaHoc);
        }
      });
    }
  }

  dataLocal: any = localStorage.getItem('Users');
  userArray = JSON.parse(this.dataLocal);

  thongTinNguoiDung: any;
  khoaHocGhiDanh: any;
  maKhoaHocGhiDanh: any;

  _layThongTinND() {
    if (localStorage.getItem('Users') !== null) {
      let taiKhoan = this.userArray.taiKhoan;
      let matKhau = this.userArray.matKhau;

      let thongTinND = {
        taiKhoan: taiKhoan,
        matKhau: matKhau,
      };

      this.data
        .post('QuanLyNguoiDung/ThongTinTaiKhoan', thongTinND)
        .subscribe((result) => {
          this.thongTinNguoiDung = result;

          this.khoaHocGhiDanh = this.thongTinNguoiDung.chiTietKhoaHocGhiDanh;

          this.maKhoaHocGhiDanh = this.khoaHocGhiDanh.map((a: any) => {
            if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
              this.buttonGone = false;
              this.buttonShow = false;
              this.buttonDetail = true;
            }
          });

          // console.log(this.maKhoaHocGhiDanh);
        });
    }
  }
}
