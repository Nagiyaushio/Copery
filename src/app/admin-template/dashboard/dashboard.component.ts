import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  showOrNot: boolean = false;

  adminString: any = localStorage.getItem('UserAdmin');
  adminInfo = JSON.parse(this.adminString);

  ngOnInit(): void {}

  addClass() {
    $('.body').toggleClass('sb-sidenav-toggled');
  }

  showDiv() {
    $('.showdiv').toggleClass('show');
    this.showOrNot = !this.showOrNot;
  }

  signOut() {
    if (confirm('Bạn có muốn đăng xuất?')) {
      localStorage.clear();

      // chuyển trang về đăng nhập
      this.router.navigate(['/admin/auth']);
    }
  }

  logOut() {
    if (confirm('Bạn có muốn đăng xuất?') === true) {
      localStorage.clear();
      // chuyển trang về đăng nhập
      this.router.navigate(['/admin/auth']);
    }
  }
}
