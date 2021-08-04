import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemNguoidungComponent } from './them-nguoidung.component';

describe('ThemNguoidungComponent', () => {
  let component: ThemNguoidungComponent;
  let fixture: ComponentFixture<ThemNguoidungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemNguoidungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
