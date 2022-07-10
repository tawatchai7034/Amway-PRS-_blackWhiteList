import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceRepairComponent } from './maintenance-repair.component';

describe('MaintenanceRepairComponent', () => {
  let component: MaintenanceRepairComponent;
  let fixture: ComponentFixture<MaintenanceRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
