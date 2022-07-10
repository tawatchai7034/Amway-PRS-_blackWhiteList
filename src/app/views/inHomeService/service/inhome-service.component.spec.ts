import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhomeServiceComponent } from './inhome-service.component';

describe('InhomeServiceComponent', () => {
  let component: InhomeServiceComponent;
  let fixture: ComponentFixture<InhomeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhomeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhomeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
