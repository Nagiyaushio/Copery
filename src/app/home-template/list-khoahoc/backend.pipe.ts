import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backend',
})
export class BackendPipe implements PipeTransform {
  transform(values: any[], ...args: any[]): any {
    return values.filter(
      (item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === 'BackEnd'
    );
  }
}
