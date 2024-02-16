import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutCourseComponent } from './about-course.component';

describe('AboutCourseComponent', () => {
  let component: AboutCourseComponent;
  let fixture: ComponentFixture<AboutCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
