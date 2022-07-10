import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePendingModalComponent } from './maintenance-pending-modal.component';

describe('MaintenancePendingModalComponent', () => {
  let component: MaintenancePendingModalComponent;
  let fixture: ComponentFixture<MaintenancePendingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePendingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePendingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
