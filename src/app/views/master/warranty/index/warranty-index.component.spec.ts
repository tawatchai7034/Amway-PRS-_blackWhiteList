import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyIndexComponent } from './warranty-index.component';

describe('WarrantyIndexComponent', () => {
  let component: WarrantyIndexComponent;
  let fixture: ComponentFixture<WarrantyIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
