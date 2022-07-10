import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveShopperComponent } from './receive-shopper.component';

describe('ReceiveShopperComponent', () => {
  let component: ReceiveShopperComponent;
  let fixture: ComponentFixture<ReceiveShopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveShopperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
