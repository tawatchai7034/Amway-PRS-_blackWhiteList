import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhomeNewComponent } from './inhome-new.component';

describe('InhomeNewComponent', () => {
  let component: InhomeNewComponent;
  let fixture: ComponentFixture<InhomeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhomeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhomeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
