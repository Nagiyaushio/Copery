import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frontend',
})
export class FrontendPipe implements PipeTransform {
  transform(values: any[], ...args: any[]): any {
    return values.filter(
      (item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === 'FrontEnd'
    );
  }
}
