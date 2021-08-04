import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tuduy',
})
export class TuduyPipe implements PipeTransform {
  transform(values: any[], ...args: any[]): any {
    return values.filter(
      (item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === 'TuDuy'
    );
  }
}
