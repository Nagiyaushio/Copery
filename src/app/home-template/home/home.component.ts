import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '@services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dskh: any = [];
  dsdm: any = [];

  //thêm vào width để gọi, tránh trường hợp load lại trang chạy và chưa resize thì không chạy được
  width: any = document.documentElement.scrollWidth;

  //Slick slide
  slideConfig = { slidesToShow: 3, slidesToScroll: 3 };

  constructor(private data: DataService, private spinner: NgxSpinnerService) {
    if (this.width < 768.52 && this.width > 576.52) {
      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else if (this.width < 576.52 && this.width > 0) {
      this.slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
    } else {
      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    }
  }

  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 768.52 && this.innerWidth > 576.52) {
      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else if (this.innerWidth < 576.52 && this.innerWidth > 0) {
      this.slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
    } else {
      this.slideConfig = { slidesToShow: 3, slidesToScroll: 3 };
    }
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    //lifecycle chạy 1 lần duy nhất
    this._layDanhSachKhoaHoc();
    this._layDanhMucKhoaHoc();
  }

  _layDanhSachKhoaHoc() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe((result: any) => {
        // console.log(result);
        this.dskh = result;
      });
  }

  _layDanhMucKhoaHoc() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      .subscribe((result: any) => {
        this.dsdm = result;
      });
  }

  searchText: any;
}
