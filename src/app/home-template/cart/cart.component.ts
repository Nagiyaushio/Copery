import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';
import { DataService } from '@services/data.service';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  p: any = 1;
  public cartitem: any = [];

  taiKhoanString: any = localStorage.getItem('Cart');
  taiKhoanArray = JSON.parse(this.taiKhoanString);

  noItem: boolean = true;
  constructor(
    private cartService: CartService,
    private orderPipe: OrderPipe,
    private data: DataService,
    private router: Router
  ) {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;

      // console.log(res);
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  number: any = 0;
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.number = res.length;

      if (this.number > 0) {
        this.noItem = false;
      } else {
        this.noItem = true;
      }
    });
    // 'string 1',

    // let resultObject = this.search(this.array);
    // console.log(resultObject);

    let result = this.array.map((a) => a.name);
    // console.log(result);

    for (let i = 0; i < result.length; i++) {
      // console.log(result[i]);
    }

    //lọc mã khóa học

    let maKhoaHocArray = this.products.map((a: any) => a.maKhoaHoc);
    // console.log(maKhoaHocArray);

    this.maKhoaHocArray = maKhoaHocArray;
  }

  order: string = 'info.fulname';
  reverse: boolean = false;
  sortedCollection: any = [];
  setOrder(value: string) {
    this.sortedCollection = this.orderPipe.transform(this.products);

    this.order = value;

    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }

  //lấy tài khoản trên localStore
  localData: any = localStorage.getItem('Users');

  localDataArray: any = JSON.parse(this.localData);

  maKhoaHocArray: any;
  confirmCart() {
    if (
      localStorage.getItem('Users') === null &&
      localStorage.getItem('UserAdmin') === null
    ) {
      alert('Vui lòng đăng nhập tài khoản');
    } else {
      if (this.number === 0) {
        alert('Vui lòng chọn khóa học');
      } else {
        //đăng ký khóa học

        if (confirm('Đăng ký khóa học?')) {
          let taiKhoan = this.localDataArray.taiKhoan;

          for (let i = 0; i < this.maKhoaHocArray.length; i++) {
            let maKhoaHoc = this.maKhoaHocArray[i];

            let thongTinND = {
              maKhoaHoc: maKhoaHoc,
              taiKhoan: taiKhoan,
            };

            this.data
              .post('QuanLyKhoaHoc/DangKyKhoaHoc', thongTinND)
              .subscribe((result) => {});

            this.router.navigate(['/']);

            setTimeout(() => {
              location.reload();
            }, 100);
          }
        }
      }
    }
  }

  array = [
    { name: 'string 1', value: 'this', other: 'that' },
    { name: 'string 2', value: 'this', other: 'that' },
    { name: 'string 3', value: 'this', other: 'that' },
  ];

  // nameKey: any,
  search(myArray: any) {
    for (var i = 0; i < myArray.length; i++) {
      // if (myArray[i].name === nameKey) {

      return myArray[i].name;
      // }
    }
  }
}
