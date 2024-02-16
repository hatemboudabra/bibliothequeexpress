import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditDepartmentComponent } from './edit-department.component';

describe('EditDepartmentComponent', () => {
  let component: EditDepartmentComponent;
  let fixture: ComponentFixture<EditDepartmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
