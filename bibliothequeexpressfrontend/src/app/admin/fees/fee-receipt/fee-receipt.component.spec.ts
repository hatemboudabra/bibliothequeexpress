import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeeReceiptComponent } from './fee-receipt.component';

describe('FeeReceiptComponent', () => {
  let component: FeeReceiptComponent;
  let fixture: ComponentFixture<FeeReceiptComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
