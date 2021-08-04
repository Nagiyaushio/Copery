import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'didong',
})
export class DidongPipe implements PipeTransform {
  transform(values: any[], ...args: any[]): any {
    return values.filter(
      (item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === 'DiDong'
    );
  }
}
