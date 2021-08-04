import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss'],
})
export class ModalDetailComponent implements OnInit {
  khoaHocNe: any;

  constructor(
    private shareData: ShareDataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.shareData.shareDetailData.subscribe((result: any) => {
      // console.log(result);
      this.khoaHocNe = result;
    });
  }

  reload() {
    // console.log(this.khoaHocNe);
  }

  buttonGone: boolean = true;
  buttonShow: boolean = false;
  addButton() {
    if (
      localStorage.getItem('Users') === null &&
      localStorage.getItem('UserAdmin') === null
    ) {
      alert('Vui lòng đăng nhập tài khoản');
    } else {
      this.cartService.addtoCart(this.khoaHocNe);
    }
  }
}
