import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllFeesComponent } from './all-fees.component';

describe('AllFeesComponent', () => {
  let component: AllFeesComponent;
  let fixture: ComponentFixture<AllFeesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
