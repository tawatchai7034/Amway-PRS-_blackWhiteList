import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowIndexComponent } from './borrow-index.component';

describe('BorrowIndexComponent', () => {
  let component: BorrowIndexComponent;
  let fixture: ComponentFixture<BorrowIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
