import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutStaffComponent } from './about-staff.component';

describe('AboutStaffComponent', () => {
  let component: AboutStaffComponent;
  let fixture: ComponentFixture<AboutStaffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
