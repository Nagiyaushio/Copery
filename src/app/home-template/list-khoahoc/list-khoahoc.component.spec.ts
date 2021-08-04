import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKhoahocComponent } from './list-khoahoc.component';

describe('ListKhoahocComponent', () => {
  let component: ListKhoahocComponent;
  let fixture: ComponentFixture<ListKhoahocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListKhoahocComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
