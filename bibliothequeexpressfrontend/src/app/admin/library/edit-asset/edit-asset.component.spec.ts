import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditAssetComponent } from './edit-asset.component';

describe('EditAssetComponent', () => {
  let component: EditAssetComponent;
  let fixture: ComponentFixture<EditAssetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
