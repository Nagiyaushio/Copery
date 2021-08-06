import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '@services/cart.service';
import { DataService } from '@services/data.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(
    private data: DataService,
    private orderPipe: OrderPipe,
    public dialog: MatDialog,
    private cartService: CartService
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

  thongTInTaiKhoan: any;
  thongTinKhoaHocTaiKhoan: any;
  _thongTinTaiKhoan() {
    let taiKhoan = this.userData.taiKhoan;

    let matKhau = this.userData.matKhau;
    let dataUp = {
      taiKhoan: taiKhoan,
      matKhau: matKhau,
    };

    // console.log(dataUp);

    this.data
      .post('QuanLyNguoiDung/ThongTinTaiKhoan', dataUp)
      .subscribe((result) => {
        this.thongTInTaiKhoan = result;

        this.thongTinKhoaHocTaiKhoan =
          this.thongTInTaiKhoan.chiTietKhoaHocGhiDanh;

        //lọc mã khóa học
        let maKhoaHocArray = this.thongTinKhoaHocTaiKhoan.map(
          (a: any) => a.maKhoaHoc
        );

        // console.log(maKhoaHocArray);
        for (let i = 0; i < maKhoaHocArray.length; i++) {
          let mangMaKHGD = maKhoaHocArray[i];

          this.data
            .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${mangMaKHGD}`)
            .subscribe((result) => {
              let dsKHGH = result;

              // console.log(dsKHGH);

              // this.dsKHGH1 = result

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

    // this.data
    //   .post('QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet', dataUp)
    //   .subscribe((result) => {
    //     this.thongTinND = result;
    //     console.log(result);

    //     //lọc mã khóa học
    //     let maKhoaHocArray = this.thongTinND.map((a: any) => a.maKhoaHoc);

    //     console.log(maKhoaHocArray);
    //     for (let i = 0; i < maKhoaHocArray.length; i++) {
    //       let mangMaKHGD = maKhoaHocArray[i];

    //       this.data
    //         .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${mangMaKHGD}`)
    //         .subscribe((result) => {
    //           let dsKHGH = result;

    //           // console.log(dsKHGH);

    //           // this.dsKHGH1 = result

    //           this.mangKhoaHocGhiDanh(dsKHGH);
    //         });

    //       //điều kiện để ẩn
    //       if (i >= 0) {
    //         this.noCourse = false;
    //         this.yesCourse = true;
    //       } else {
    //         this.noCourse = true;
    //         this.yesCourse = false;
    //       }
    //     }
    //   });
  }
  dsKHGH1: any;
  //lấy mảng này show ra UI
  dsKHGhiDanh: any = [];

  mangKhoaHocGhiDanh(dskh: any) {
    this.dsKHGhiDanh.push(dskh);
    // console.log(this.dsKHGhiDanh);

    // for (let i = 0; i < this.dsKHGhiDanh.length; i++) {
    //   this.dsKHGhiDanh[i].hinhAnh = '../assets/images/error-img.png';
    // }
  }

  updateUrl(e: any) {
    // console.log(e);

    for (let i = 0; i < this.dsKHGhiDanh.length; i++) {
      if (e.type === 'error') {
        this.dsKHGhiDanh[i].hinhAnh = '../assets/images/error-img.png';
      }
    }
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
  number: any;
  deleteSU(maKhoaHoc: any) {
    // console.log(maKhoaHoc);

    if (confirm('Hủy ghi danh khóa học?')) {
      this.cartService.getProducts().subscribe((res: any) => {
        this.number = res.length;
      });

      if (this.number !== 0) {
        // alert('Vùi lòng xác nh');
      } else {
        if (
          confirm(
            'Sau khi xóa thì giỏ hàng của bạn sẽ trống, bạn có chắc không?'
          )
        ) {
          let taiKhoan = this.userData.taiKhoan;

          let deleteOb = {
            maKhoaHoc: maKhoaHoc,
            taiKhoan: taiKhoan,
          };

          this.data
            .post('QuanLyKhoaHoc/HuyGhiDanh', deleteOb)
            .subscribe((reuslt) => {});

          setTimeout(() => {
            location.reload();
          }, 100);
        }
      }
    }
  }
}
function e(e: any) {
  throw new Error('Function not implemented.');
}
