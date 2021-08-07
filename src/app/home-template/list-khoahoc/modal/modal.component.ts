import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  khoaHoc: any;

  constructor(
    private shareData: ShareDataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.shareData.shareInfo.subscribe((result: any) => {
      this.khoaHoc = result;
    });

    // this.cartService.cartItemList.map((a: any) => {
    //   if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
    //     this.buttonBegon = false;
    //     this.buttonShow = true;
    //   }
    // });
  }

  buttonBegon: boolean = true;
  buttonShow: boolean = false;
  buttonGone() {
    if (
      localStorage.getItem('Users') === null &&
      localStorage.getItem('UserAdmin') === null
    ) {
      alert('Vui lòng đăng nhập tài khoản');
    } else {
      this.cartService.addtoCart(this.khoaHoc);

      // this.cartService.cartItemList.map((a: any) => {
      //   if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
      // this.buttonBegon = false;
      this.buttonShow = true;
      //   }
      // });

      // console.log(this.khoaHoc);
    }
  }
}
