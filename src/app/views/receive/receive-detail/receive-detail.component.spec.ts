import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveDetailComponent } from './receive-detail.component';

describe('ReceiveDetailComponent', () => {
  let component: ReceiveDetailComponent;
  let fixture: ComponentFixture<ReceiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
