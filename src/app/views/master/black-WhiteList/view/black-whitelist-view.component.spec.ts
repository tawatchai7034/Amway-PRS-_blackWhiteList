import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWhitelistViewComponent } from './black-whitelist-view.component';

describe('BlackWhitelistViewComponent', () => {
  let component: BlackWhitelistViewComponent;
  let fixture: ComponentFixture<BlackWhitelistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackWhitelistViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackWhitelistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
