import { map } from 'rxjs/operators';
import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from './../../_core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '@services/cart.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  khoaHoc: any;
  dskhDetail: any = [];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  id: any = '';

  updateUrl(e: any) {
    if (e.type === 'error') {
      this.khoaHoc.hinhAnh = '../assets/images/error-img.png';
    }
  }

  //nhận lại data idOut

  //thêm vào width để gọi, tránh trường hợp load lại trang chạy và chưa resize thì không chạy được
  width: any = document.documentElement.scrollWidth;
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
    private location: Location,
    private spinner: NgxSpinnerService
  ) {
    if (this.width < 992.52 && this.width > 768.52) {
      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    } else if (this.width < 768.52 && this.width > 576.52) {
      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else if (this.width < 576.52 && this.width > 0) {
      this.slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
    } else {
      this.slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
    }

    this.activatedRoute.paramMap.subscribe((val) => {
      this.ngOnInit();

      // this.cartService.cartItemList.map((a: any) => {
      //   if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
      //     this.buttonGone = false;
      //     this.buttonShow = true;
      //   } else {
      //     this.buttonGone = true;
      //     this.buttonShow = false;
      //   }
      // });
    });

    // console.log(this.khoaHoc);
  }

  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = document.documentElement.scrollWidth;

    if (this.innerWidth < 992.52 && this.innerWidth > 768.52) {
      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    } else if (this.innerWidth < 768.52 && this.innerWidth > 576.52) {
      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else if (this.innerWidth < 576.52 && this.innerWidth > 0) {
      this.slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
    } else {
      this.slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
    }
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this._layThongTinKhoaHoc();
    this._layDanhSachKhoaHocDetail();

    // console.log(this.khoaHoc);
    // if (this.khoaHoc !== undefined) {
    this._layThongTinND();
    // }

    this.idForUsed(this.idTest);

    if (this.width < 992.52 && this.width > 768.52) {
      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    } else if (this.width < 768.52 && this.width > 576.52) {
      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else if (this.width < 576.52 && this.width > 0) {
      this.slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
    } else {
      this.slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
    }
  }

  idTest: any = '';
  idForUsed(id: any) {
    this.idTest = id;

    if ((this.idTest = this.idTest)) {
      this._layThongTinKhoaHoc();
      // console.log(1);
    } else {
      this.idTest = id;
      // console.log(2);
    }
  }

  _layThongTinKhoaHoc() {
    //lấy 1 param từ URL
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id);

    //lấy nhiều params từ URL
    this.activatedRoute.queryParams.subscribe((params: any) => {
      // console.log(params);
    });

    this.data
      .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`)
      .subscribe((result: any) => {
        this.khoaHoc = result;
        // console.log(result);

        this.cartService.cartItemList.map((a: any) => {
          if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
            this.buttonGone = false;
            this.buttonShow = true;
          } else {
            this.buttonGone = true;
            this.buttonShow = false;
          }
        });
      });
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

          if (this.khoaHoc !== undefined) {
            this.maKhoaHocGhiDanh = this.khoaHocGhiDanh.map((a: any) => {
              if (a.maKhoaHoc === this.khoaHoc.maKhoaHoc) {
                this.buttonGone = false;
                this.buttonShow = false;
                this.buttonDetail = true;
              }
            });
          }
        });
    }
  }

  _layDanhSachKhoaHocDetail() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe((result: any) => {
        this.dskhDetail = result;
        // console.log(result);
      });
  }

  // cartItem: any = [thi]
  buttonGone: boolean = true;
  buttonShow: boolean = false;
  buttonDetail: boolean = false;
  //giỏ hàng
  addCart() {
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

          this.ngOnInit();
        }
      });
    }
  }
}
