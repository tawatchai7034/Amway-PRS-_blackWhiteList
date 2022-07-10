import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveShopperDetailComponent } from './receive-shopper-detail.component';

describe('ReceiveShopperDetailComponent', () => {
  let component: ReceiveShopperDetailComponent;
  let fixture: ComponentFixture<ReceiveShopperDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveShopperDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveShopperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
