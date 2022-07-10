import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomIndexComponent } from './bom-index.component';

describe('BomIndexComponent', () => {
  let component: BomIndexComponent;
  let fixture: ComponentFixture<BomIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
