import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToShipmentComponent } from './send-to-shipment.component';

describe('SendToShipmentComponent', () => {
  let component: SendToShipmentComponent;
  let fixture: ComponentFixture<SendToShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
