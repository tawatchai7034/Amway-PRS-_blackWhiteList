import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWhitelistEditComponent } from './black-whitelist-edit.component';

describe('BlackWhitelistEditComponent', () => {
  let component: BlackWhitelistEditComponent;
  let fixture: ComponentFixture<BlackWhitelistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackWhitelistEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackWhitelistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
