import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from 'src/app/home-template/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class CandeactiveGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: any) {
    return (
      component.canDeactivate() ||
      window.confirm('Bạn có muốn rời trang không?')
    );
  }
}
