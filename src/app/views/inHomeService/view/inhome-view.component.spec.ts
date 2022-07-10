import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhomeViewComponent } from './inhome-view.component';

describe('InhomeViewComponent', () => {
  let component: InhomeViewComponent;
  let fixture: ComponentFixture<InhomeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhomeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
