import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@services/data.service';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';
import { DialogKhoahocComponent } from '../dialog-khoahoc/dialog-khoahoc.component';

@Component({
  selector: 'app-bang-khoahoc',
  templateUrl: './bang-khoahoc.component.html',
  styleUrls: ['./bang-khoahoc.component.scss'],
})
export class BangKhoahocComponent implements OnInit {
  @Input() khoaHoc: any;

  constructor(
    public dialog: MatDialog,
    private data: DataService,
    private shareData: ShareDataService
  ) {
    // console.log(this.khoaHoc.maKhoaHoc);
  }

  ngOnInit(): void {}

  //gọi API xóa dữ liệu người dùng
  deleteCourse(user: any) {
    // console.log(user);
    if (confirm('Bạn có chắc xóa không?')) {
      // console.log(user);
      this.data
        .delete('QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=', user)
        .subscribe((result: any) => {});

      setTimeout(() => {
        location.reload();
      }, 100);
    }
  }

  //click edit button
  openDialog() {
    this.dialog.open(DialogKhoahocComponent);
    this.shareData.sharingData(this.khoaHoc);
  }
}
