import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinQuanTriComponent } from './thong-tin-quan-tri.component';

describe('ThongTinQuanTriComponent', () => {
  let component: ThongTinQuanTriComponent;
  let fixture: ComponentFixture<ThongTinQuanTriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongTinQuanTriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinQuanTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
