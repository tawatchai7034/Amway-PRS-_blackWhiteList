import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhomeSurveyComponent } from './inhome-survey.component';

describe('InhomeSurveyComponent', () => {
  let component: InhomeSurveyComponent;
  let fixture: ComponentFixture<InhomeSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhomeSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhomeSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
