import { TestBed } from '@angular/core/testing';

import { OrderCustomerService } from './order-customer.service';

describe('OrderCustomerService', () => {
  let service: OrderCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
