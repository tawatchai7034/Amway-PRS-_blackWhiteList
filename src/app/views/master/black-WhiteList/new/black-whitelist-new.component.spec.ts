import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWhitelistNewComponent } from './black-whitelist-new.component';

describe('BlackWhitelistNewComponent', () => {
  let component: BlackWhitelistNewComponent;
  let fixture: ComponentFixture<BlackWhitelistNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackWhitelistNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackWhitelistNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
