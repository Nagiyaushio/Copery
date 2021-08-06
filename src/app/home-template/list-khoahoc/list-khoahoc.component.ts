import { CartService } from '@services/cart.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-list-khoahoc',
  templateUrl: './list-khoahoc.component.html',
  styleUrls: ['./list-khoahoc.component.scss'],
})
export class ListKhoahocComponent implements OnInit {
  dskhAll: any = [];
  viewMode: any;

  //thêm vào width để gọi, tránh trường hợp load lại trang chạy và chưa resize thì không chạy được
  width: any = document.documentElement.scrollWidth;

  // Vị trí của các page
  t1: any = 1;
  t2: any = 1;
  t3: any = 1;
  t4: any = 1;
  t5: any = 1;
  t6: any = 1;
  t7: any = 1;

  //cập nhật lại trang khi click vào danh mục
  tabone() {
    this.t1 = 1;
  }
  tabtwo() {
    this.t2 = 1;
  }
  tabthree() {
    this.t3 = 1;
  }
  tabfour() {
    this.t4 = 1;
  }
  tabfive() {
    this.t5 = 1;
  }
  tabsix() {
    this.t6 = 1;
  }
  tabseven() {
    this.t7 = 1;
  }

  //cập nhật lại vị trí của page
  eventPage: any;
  pageChanged(e: any) {
    this.eventPage = e;

    this.t1 = this.eventPage;
    this.t2 = this.eventPage;
    this.t3 = this.eventPage;
    this.t4 = this.eventPage;
    this.t5 = this.eventPage;
    this.t6 = this.eventPage;
    this.t7 = this.eventPage;
  }

  // Điều kiện cho các page
  perpageitemAll: number = 8;

  //Slick slide
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  constructor(
    private data: DataService,
    private cartService: CartService,
    private spinner: NgxSpinnerService
  ) {
    if (this.width < 992.52 && this.width > 768.52) {
      this.perpageitemAll = 6;

      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    } else if (this.width < 768.52 && this.width > 576.52) {
      this.perpageitemAll = 4;

      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else if (this.width < 576.52 && this.width > 0) {
      this.perpageitemAll = 2;

      this.slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
    } else {
      this.perpageitemAll = 8;

      this.slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
    }

    // console.log(this.maKhoaHoc);
  }

  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 992.52 && this.innerWidth > 768.52) {
      this.perpageitemAll = 6;

      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    } else if (this.innerWidth < 768.52 && this.innerWidth > 576.52) {
      this.perpageitemAll = 4;

      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else if (this.innerWidth < 576.52 && this.innerWidth > 0) {
      this.perpageitemAll = 2;

      this.slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
    } else {
      this.perpageitemAll = 8;

      this.slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
    }
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    if (this.width < 992.52 && this.width > 768.52) {
      this.perpageitemAll = 6;

      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    } else if (this.width < 768.52 && this.width > 576.52) {
      this.perpageitemAll = 4;

      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else if (this.width < 576.52 && this.width > 0) {
      this.perpageitemAll = 2;

      this.slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
    } else {
      this.perpageitemAll = 8;

      this.slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
    }

    this._layDanhSachKhoaHocAll();

    this.viewMode = 'tab1';

    this.changeEvent(this.maKhoaHoc);
  }

  maKhoaHoc: any = '';
  changeEvent(maKhoaHoc: any) {
    this.maKhoaHoc = maKhoaHoc;

    if ((this.maKhoaHoc = this.maKhoaHoc)) {
      this._layDanhSachKhoaHocAll();
      // console.log(1)
    } else {
      this.maKhoaHoc = maKhoaHoc;
    }
  }

  searchText: any;

  _layDanhSachKhoaHocAll() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe((result: any) => {
        this.dskhAll = result;
        // console.log(result);
      });
  }
}
