import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemKhoahocComponent } from './them-khoahoc.component';

describe('ThemKhoahocComponent', () => {
  let component: ThemKhoahocComponent;
  let fixture: ComponentFixture<ThemKhoahocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemKhoahocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemKhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
