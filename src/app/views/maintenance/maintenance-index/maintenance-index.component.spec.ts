import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceIndexComponent } from './maintenance-index.component';

describe('MaintenanceIndexComponent', () => {
  let component: MaintenanceIndexComponent;
  let fixture: ComponentFixture<MaintenanceIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
