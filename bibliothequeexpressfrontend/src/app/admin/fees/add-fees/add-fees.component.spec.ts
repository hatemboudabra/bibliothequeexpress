import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddFeesComponent } from './add-fees.component';

describe('AddFeesComponent', () => {
  let component: AddFeesComponent;
  let fixture: ComponentFixture<AddFeesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
