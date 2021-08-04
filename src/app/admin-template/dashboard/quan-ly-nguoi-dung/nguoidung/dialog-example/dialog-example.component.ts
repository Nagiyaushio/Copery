import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
})
export class DialogExampleComponent implements OnInit {
  nguoiDung: any;
  hide: boolean = true;
  maLoaiNguoiDung: any;
  usertype: string[] = ['HV', 'GV'];

  constructor(private data: DataService, private shareData: ShareDataService) {}

  ngOnInit(): void {
    this.shareData.shareND.subscribe((result: any) => {
      this.nguoiDung = result;
      // console.log(result);
    });
  }

  editUser(user: any) {
    //thêm mã nhóm vào array
    user.maNhom = 'GP01';
    //thêm tài khoản vào khi sử dụng disabled
    user.taiKhoan = this.nguoiDung.taiKhoan;

    if (confirm('Bạn có chắc sửa không?')) {
      // console.log(user);
      this.data
        .put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user)
        .subscribe((result: any) => {
          // console.log(result);
        });

      setTimeout(() => {
        location.reload();
      }, 500);
    }
  }
}
