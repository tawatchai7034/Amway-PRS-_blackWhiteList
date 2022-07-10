import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveToShipmentComponent } from './receive-to-shipment.component';

describe('ReceiveToShipmentComponent', () => {
  let component: ReceiveToShipmentComponent;
  let fixture: ComponentFixture<ReceiveToShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveToShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveToShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
