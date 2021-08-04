import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullstack',
})
export class FullstackPipe implements PipeTransform {
  transform(values: any[], ...args: any[]): any {
    return values.filter(
      (item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === 'FullStack'
    );
  }
}
