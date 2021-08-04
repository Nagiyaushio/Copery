import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindKhoahocComponent } from './find-khoahoc.component';

describe('FindKhoahocComponent', () => {
  let component: FindKhoahocComponent;
  let fixture: ComponentFixture<FindKhoahocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindKhoahocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindKhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
