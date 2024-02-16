import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutTeacherComponent } from './about-teacher.component';

describe('AboutTeacherComponent', () => {
  let component: AboutTeacherComponent;
  let fixture: ComponentFixture<AboutTeacherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
