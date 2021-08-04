import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  // khóa học
  khoaHoc: any = new BehaviorSubject({} as object);
  shareInfo = this.khoaHoc.asObservable();

  //người dùng
  nguoiDung: any = new BehaviorSubject({} as object);
  shareND = this.nguoiDung.asObservable();

  //khoá học detail
  khoaHocDetail: any = new BehaviorSubject({} as object);
  shareDetailData = this.khoaHocDetail.asObservable();
  constructor() {}

  sharingData(_khoaHoc: any) {
    this.khoaHoc.next(_khoaHoc);
  }

  sharingUser(_nguoiDung: any) {
    this.nguoiDung.next(_nguoiDung);
  }

  sharingDataDetail(_khoaHocDetail: any) {
    this.khoaHocDetail.next(_khoaHocDetail);
  }
}
