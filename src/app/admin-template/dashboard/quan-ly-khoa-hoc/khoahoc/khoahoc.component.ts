import { DataService } from '@services/data.service';
import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-khoahoc',
  templateUrl: './khoahoc.component.html',
  styleUrls: ['./khoahoc.component.scss'],
})
export class KhoahocComponent implements OnInit {
  dskh: any = [];
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
    this._layDanhSachKhoaHoc();
  }

  _layDanhSachKhoaHoc() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe((result: any) => {
        // console.log(result);
        this.dskh = result;
      });
  }

  order: string = 'info.fulname';
  reverse: boolean = false;

  setOrder(value: string) {
    this.sortedCollection = this.orderPipe.transform(this.dskh);

    this.order = value;

    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  }
}
