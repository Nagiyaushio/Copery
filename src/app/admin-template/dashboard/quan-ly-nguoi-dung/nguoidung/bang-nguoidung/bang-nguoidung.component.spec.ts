import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangNguoidungComponent } from './bang-nguoidung.component';

describe('BangNguoidungComponent', () => {
  let component: BangNguoidungComponent;
  let fixture: ComponentFixture<BangNguoidungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangNguoidungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BangNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
