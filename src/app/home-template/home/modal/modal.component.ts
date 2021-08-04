import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shares/share-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  khoaHoc: any;

  constructor(private shareData: ShareDataService) {}

  ngOnInit(): void {
    this.shareData.shareInfo.subscribe((result: any) => {
      // console.log(result);
      this.khoaHoc = result;
    });
  }
}
