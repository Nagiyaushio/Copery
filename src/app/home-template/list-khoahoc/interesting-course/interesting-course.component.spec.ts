import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingCourseComponent } from './interesting-course.component';

describe('InterestingCourseComponent', () => {
  let component: InterestingCourseComponent;
  let fixture: ComponentFixture<InterestingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
