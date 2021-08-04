import { DataService } from '@services/data.service';
import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nguoidung',
  templateUrl: './nguoidung.component.html',
  styleUrls: ['./nguoidung.component.scss'],
})
export class NguoidungComponent implements OnInit {
  dsnd: any = [];
  searchText: any;
  p: any = 1;
  user: any = '';
  sortedCollection: any = [];
  // user: any = [];
  userItem: any = [];

  constructor(
    private data: DataService,
    private orderPipe: OrderPipe,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._layDanhSachNguoiDung();
  }

  _layDanhSachNguoiDung() {
    this.data
      .get('QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01')
      .subscribe((result: any) => {
        // console.log(result);
        this.dsnd = result;
      });
  }

  order: string = 'info.fulname';
  reverse: boolean = false;

  setOrder(value: string) {
    this.sortedCollection = this.orderPipe.transform(this.dsnd);

    this.order = value;

    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }
}
