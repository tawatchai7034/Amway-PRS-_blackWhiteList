import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceServiceModalComponent } from './maintenance-service-modal.component';

describe('MaintenanceServiceModalComponent', () => {
  let component: MaintenanceServiceModalComponent;
  let fixture: ComponentFixture<MaintenanceServiceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceServiceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceServiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
