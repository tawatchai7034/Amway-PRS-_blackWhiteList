import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWhitelistIndexComponent } from './black-whitelist-index.component';

describe('BlackWhitelistIndexComponent', () => {
  let component: BlackWhitelistIndexComponent;
  let fixture: ComponentFixture<BlackWhitelistIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackWhitelistIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackWhitelistIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
