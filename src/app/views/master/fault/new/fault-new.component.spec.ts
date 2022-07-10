import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultNewComponent } from './fault-new.component';

describe('FaultNewComponent', () => {
  let component: FaultNewComponent;
  let fixture: ComponentFixture<FaultNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
