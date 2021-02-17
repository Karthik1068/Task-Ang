import { OldTransactionPage} from '../old-transactions/old-transaction.po';
import { browser, protractor, element, by } from 'protractor';

describe('protractor E2E - View Old Transaction Page', () => {
    let page: OldTransactionPage;
    beforeEach(() => {
        page = new OldTransactionPage();
    });

    it('If user enter to view submitted Transaction, it will show the list of previous transactions', 
    () => {
        page.navigateTotrans();
    });

});