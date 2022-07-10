import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhomeCancelComponent } from './inhome-cancel.component';

describe('InhomeCancelComponent', () => {
  let component: InhomeCancelComponent;
  let fixture: ComponentFixture<InhomeCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhomeCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhomeCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
