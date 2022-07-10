import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartIndexComponent } from './part-index.component';

describe('PartIndexComponent', () => {
  let component: PartIndexComponent;
  let fixture: ComponentFixture<PartIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
