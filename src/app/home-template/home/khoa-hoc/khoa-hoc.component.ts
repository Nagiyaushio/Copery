import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '@services/cart.service';
import { DataService } from '@services/data.service';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';

@Component({
  selector: 'app-khoa-hoc',
  templateUrl: './khoa-hoc.component.html',
  styleUrls: ['./khoa-hoc.component.scss'],
})
export class KhoaHocComponent implements OnInit {
  @Input() khoaHoc: any;

  updateUrl(e: any) {
    if (e.type === 'error') {
      this.khoaHoc.hinhAnh = '../assets/images/error-img.png';
    }
  }
  constructor(
    private shareData: ShareDataService,
    private cartService: CartService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItemList.map((a: any) => {
      if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
        this.buttonGone = false;
        this.buttonShow = true;
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
      // console.log(1);

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
