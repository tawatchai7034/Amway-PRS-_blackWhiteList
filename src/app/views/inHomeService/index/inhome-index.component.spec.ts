import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhomeIndexComponent } from './inhome-index.component';

describe('InhomeIndexComponent', () => {
  let component: InhomeIndexComponent;
  let fixture: ComponentFixture<InhomeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhomeIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
