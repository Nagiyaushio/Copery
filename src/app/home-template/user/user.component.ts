import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.body.className = 'user-profile-background';
  }

  ngOnDestroy() {
    document.body.className = '';
  }

  //lấy thông tin trên localStorage
  dataUser: any = localStorage.getItem('Users');
  // chuyển về kiểu object
  userName = JSON.parse(this.dataUser);
}
