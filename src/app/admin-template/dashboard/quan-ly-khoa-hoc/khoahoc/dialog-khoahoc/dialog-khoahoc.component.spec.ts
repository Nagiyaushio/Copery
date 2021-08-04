import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKhoahocComponent } from './dialog-khoahoc.component';

describe('DialogKhoahocComponent', () => {
  let component: DialogKhoahocComponent;
  let fixture: ComponentFixture<DialogKhoahocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogKhoahocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogKhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
