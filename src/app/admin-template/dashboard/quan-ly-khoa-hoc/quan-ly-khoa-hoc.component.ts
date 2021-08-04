import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
@Component({
  selector: 'app-quan-ly-khoa-hoc',
  templateUrl: './quan-ly-khoa-hoc.component.html',
  styleUrls: ['./quan-ly-khoa-hoc.component.scss'],
})
export class QuanLyKhoaHocComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  // openDialog() {
  //   this.dialog.open(DialogExampleComponent);
  // }
}
