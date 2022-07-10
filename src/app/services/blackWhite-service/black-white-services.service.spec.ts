import { TestBed } from '@angular/core/testing';

import { BlackWhiteServicesService } from './black-white-services.service';

describe('BlackWhiteServicesService', () => {
  let service: BlackWhiteServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlackWhiteServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
