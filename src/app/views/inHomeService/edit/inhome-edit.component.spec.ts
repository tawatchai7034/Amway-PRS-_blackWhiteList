import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhomeEditComponent } from './inhome-edit.component';

describe('InhomeEditComponent', () => {
  let component: InhomeEditComponent;
  let fixture: ComponentFixture<InhomeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhomeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
