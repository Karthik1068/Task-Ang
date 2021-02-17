import { TestBed } from '@angular/core/testing';

import { SubmitTransactionService } from './submit-transaction.service';

describe('SubmitTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitTransactionService = TestBed.get(SubmitTransactionService);
    expect(service).toBeTruthy();
  });
});
