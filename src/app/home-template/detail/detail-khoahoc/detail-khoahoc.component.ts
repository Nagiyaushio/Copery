import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-detail-khoahoc',
  templateUrl: './detail-khoahoc.component.html',
  styleUrls: ['./detail-khoahoc.component.scss'],
})
export class DetailKhoahocComponent implements OnInit {
  @Input() khoaHocNe: any;
  @Output() idOut = new EventEmitter();

  constructor(
    private shareData: ShareDataService,
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private cartService: CartService
  ) {
    if (this.khoaHocNe !== undefined) {
      this.cartService.cartItemList.map((a: any) => {
        if (this.khoaHocNe.maKhoaHoc === a.maKhoaHoc) {
          this.buttonGone = false;
          this.buttonShow = true;
        }
      });
    }
  }

  ngOnInit(): void {
    this.cartService.cartItemList.map((a: any) => {
      if (this.khoaHocNe.maKhoaHoc === a.maKhoaHoc) {
        this.buttonGone = false;
        this.buttonShow = true;
      }
    });

    this._layThongTinND();
  }

  xemNhanhDetail() {
    this.shareData.sharingDataDetail(this.khoaHocNe);
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
      this.cartService.addtoCart(this.khoaHocNe);

      this.cartService.cartItemList.map((a: any) => {
        if (this.khoaHocNe.maKhoaHoc === a.maKhoaHoc) {
          this.buttonGone = false;
          this.buttonShow = true;

          // console.log(1);
          this.idOut.emit(this.khoaHocNe.maKhoaHoc);
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

          // console.log(this.khoaHoc.maKhoaHoc);

          this.maKhoaHocGhiDanh = this.khoaHocGhiDanh.map((a: any) => {
            if (a.maKhoaHoc === this.khoaHocNe.maKhoaHoc) {
              this.buttonGone = false;
              this.buttonShow = false;
              this.buttonDetail = true;
            }
          });
        });
    }
  }
}
