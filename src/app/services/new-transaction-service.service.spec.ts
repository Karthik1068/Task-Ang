import { TestBed } from '@angular/core/testing';

import { NewTransactionServiceService } from './new-transaction-service.service';

describe('NewTransactionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewTransactionServiceService = TestBed.get(NewTransactionServiceService);
    expect(service).toBeTruthy();
  });
});
