import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thietke',
})
export class ThietkePipe implements PipeTransform {
  transform(values: any[], ...args: any[]): any {
    return values.filter(
      (item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === 'Design'
    );
  }
}
