import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

    // console.log(this.cartItemList);

    // //thêm vào localstorage
    // localStorage.setItem('Cart', JSON.stringify(this.cartItemList));
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.maKhoaHoc === a.maKhoaHoc) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);

    // console.log(this.cartItemList);
  }
}
