import { TestBed } from '@angular/core/testing';

import { SavelocalstorageService } from './savelocalstorage.service';

describe('SavelocalstorageService', () => {
  let service: SavelocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavelocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
