import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKhoahocComponent } from './detail-khoahoc.component';

describe('DetailKhoahocComponent', () => {
  let component: DetailKhoahocComponent;
  let fixture: ComponentFixture<DetailKhoahocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailKhoahocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
