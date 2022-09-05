import { TestBed } from '@angular/core/testing';

import { ApiAccountAdminService } from './api-account-admin.service';

describe('ApiAccountAdminService', () => {
  let service: ApiAccountAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAccountAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
