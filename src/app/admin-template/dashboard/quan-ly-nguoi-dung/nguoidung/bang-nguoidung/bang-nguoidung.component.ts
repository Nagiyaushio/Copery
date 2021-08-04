import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@services/data.service';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-bang-nguoidung',
  templateUrl: './bang-nguoidung.component.html',
  styleUrls: ['./bang-nguoidung.component.scss'],
})
export class BangNguoidungComponent implements OnInit {
  @Input() nguoiDung: any;

  constructor(
    public dialog: MatDialog,
    private data: DataService,
    private shareData: ShareDataService
  ) {}

  ngOnInit(): void {}

  //gọi API xóa dữ liệu người dùng
  deleteUser(user: any) {
    if (confirm('Bạn có chắc xóa không?')) {
      // console.log(user);
      this.data
        .delete('QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=', user)
        .subscribe((result: any) => {});

      setTimeout(() => {
        location.reload();
      }, 100);
    }
  }

  //click edit button
  openDialog() {
    this.dialog.open(DialogExampleComponent);
    this.shareData.sharingUser(this.nguoiDung);
  }
}
