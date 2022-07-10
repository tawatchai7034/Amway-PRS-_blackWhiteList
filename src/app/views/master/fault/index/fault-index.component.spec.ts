import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultIndexComponent } from './fault-index.component';

describe('FaultIndexComponent', () => {
  let component: FaultIndexComponent;
  let fixture: ComponentFixture<FaultIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
