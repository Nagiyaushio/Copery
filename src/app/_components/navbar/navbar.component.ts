import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@services/cart.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //user or admin
  isLogin: boolean = true;
  isLoginAdmin: boolean = true;
  isOut: boolean = false;

  //sự kiện load
  spinner: boolean = false;
  begoneDiv: boolean = true;
  height305px: boolean = false;

  windowWidth: any = document.documentElement.scrollWidth;
  constructor(
    private router: Router,
    private cartService: CartService,
    private _location: Location
  ) {
    if (
      localStorage.getItem('Users') === null &&
      localStorage.getItem('UserAdmin') !== null
    ) {
      this.isLoginAdmin = true;
      this.isLogin = false;
    } else if (
      localStorage.getItem('UserAdmin') === null &&
      localStorage.getItem('Users') !== null
    ) {
      this.isLogin = true;
      this.isLoginAdmin = false;
    } else {
      this.isOut = true;
      this.isLoginAdmin = false;
      this.isLogin = false;
    }

    // if (this.windowWidth < 766) {
    //   this.begoneDiv = false;
    // } else {
    //   this.begoneDiv = true;
    // }

    // console.log(this.windowWidth);
  }

  public innerWidth: any;
  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.innerWidth = document.documentElement.scrollWidth;
  //   if (this.innerWidth > 768.643543) {
  //     this.begoneDiv = true;
  //   } else {
  //     this.begoneDiv = false;
  //   }
  // }

  clickTag() {}

  //đổi màu khi scroll
  nav_value = false;

  //sự kiện scroll với navbar

  @HostListener('document:scroll')
  scrollfunction() {
    if (document.documentElement.scrollTop > 0) {
      this.nav_value = true;
    } else {
      this.nav_value = false;
    }
  }

  dsKHThemVaoGio: any;

  //lấy thông tin trên localStorage
  dataUser: any = localStorage.getItem('Users');
  // chuyển về kiểu object
  userName = JSON.parse(this.dataUser);

  //lấy thông tin trên localStorage
  dataAdmin: any = localStorage.getItem('UserAdmin');
  // chuyển về kiểu object
  adminName = JSON.parse(this.dataAdmin);

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.matBadge = res.length;

      this.dsKHThemVaoGio = res;

      // console.log(this.dsKHThemVaoGio);
    });
  }

  signIn() {}

  logOut() {
    if (confirm('Bạn có muốn đăng xuất?')) {
      localStorage.clear();

      setTimeout(() => {
        location.reload();
      }, 100);
    }
  }

  //nhận lại dữ liệu
  matBadge: any = 0;

  courseDelete(item: any) {
    // console.log(1);
    this.cartService.removeCartItem(item);
  }
}
