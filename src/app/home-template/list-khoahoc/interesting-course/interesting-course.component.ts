import { CartService } from '@services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';

@Component({
  selector: 'app-interesting-course',
  templateUrl: './interesting-course.component.html',
  styleUrls: ['./interesting-course.component.scss'],
})
export class InterestingCourseComponent implements OnInit {
  @Input() khoaHoc: any;

  constructor(
    private shareData: ShareDataService,
    private cartService: CartService
  ) {
    // console.log(this.khoaHoc.biDanh);
  }

  ngOnInit(): void {
    this.cartService.cartItemList.map((a: any) => {
      if (this.khoaHoc.maKhoaHoc === a.maKhoaHoc) {
        this.buttonGone = false;
        this.buttonShow = true;
      }
    });
  }
  xemNhanh() {
    this.shareData.sharingData(this.khoaHoc);
  }

  buttonGone: boolean = true;
  buttonShow: boolean = false;

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
}
