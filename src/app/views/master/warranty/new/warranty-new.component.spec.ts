import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyNewComponent } from './warranty-new.component';

describe('WarrantyNewComponent', () => {
  let component: WarrantyNewComponent;
  let fixture: ComponentFixture<WarrantyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
