import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowNewModalComponent } from './borrow-new-modal.component';

describe('BorrowNewModalComponent', () => {
  let component: BorrowNewModalComponent;
  let fixture: ComponentFixture<BorrowNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowNewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
