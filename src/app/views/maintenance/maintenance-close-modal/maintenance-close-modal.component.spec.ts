import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCloseModalComponent } from './maintenance-close-modal.component';

describe('MaintenanceCloseModalComponent', () => {
  let component: MaintenanceCloseModalComponent;
  let fixture: ComponentFixture<MaintenanceCloseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceCloseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCloseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
