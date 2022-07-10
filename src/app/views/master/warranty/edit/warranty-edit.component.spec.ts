import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyEditComponent } from './warranty-edit.component';

describe('WarrantyEditComponent', () => {
  let component: WarrantyEditComponent;
  let fixture: ComponentFixture<WarrantyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
