import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultEditComponent } from './fault-edit.component';

describe('FaultEditComponent', () => {
  let component: FaultEditComponent;
  let fixture: ComponentFixture<FaultEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
