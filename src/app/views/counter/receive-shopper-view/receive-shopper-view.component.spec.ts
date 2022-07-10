import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveShopperViewComponent } from './receive-shopper-view.component';

describe('ReceiveShopperViewComponent', () => {
  let component: ReceiveShopperViewComponent;
  let fixture: ComponentFixture<ReceiveShopperViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveShopperViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveShopperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
