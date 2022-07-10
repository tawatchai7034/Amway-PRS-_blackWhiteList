import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultViewComponent } from './fault-view.component';

describe('FaultViewComponent', () => {
  let component: FaultViewComponent;
  let fixture: ComponentFixture<FaultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
