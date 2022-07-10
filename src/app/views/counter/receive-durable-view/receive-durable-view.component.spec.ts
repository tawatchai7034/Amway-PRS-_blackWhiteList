import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveDurableViewComponent } from './receive-durable-view.component';

describe('ReceiveDurableViewComponent', () => {
  let component: ReceiveDurableViewComponent;
  let fixture: ComponentFixture<ReceiveDurableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveDurableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveDurableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
