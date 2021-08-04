import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangKhoahocComponent } from './bang-khoahoc.component';

describe('BangKhoahocComponent', () => {
  let component: BangKhoahocComponent;
  let fixture: ComponentFixture<BangKhoahocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangKhoahocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BangKhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
