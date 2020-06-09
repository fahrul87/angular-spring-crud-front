import { TestBed } from '@angular/core/testing';

import { UserRegistrationService } from './user-registration.service';

describe('UserRegistrationService', () => {
  let service: UserRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationService);
  });

  it('should be created', () => {
    const service: UserRegistrationService = TestBed.get(UserRegistrationService);
    expect(service).toBeTruthy();
  });
});
