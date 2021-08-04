import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {
  constructor(private _location: Location) {
    // if (localStorage.getItem('Users') !== null) {
    //   this._location.back();
    //   setTimeout(() => {
    //     location.reload();
    //   }, 100);
    // }
  }

  ngOnInit(): void {
    document.body.className = 'type-background';
  }

  ngOnDestroy() {
    document.body.className = '';
  }
}
