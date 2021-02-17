import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class OldTransactionPage {
    navigateTotrans() {
        setTimeout(() => {
            return browser.get('/old-transaction');
        }, 2000);
    }
    oldTransactionClick() {
        element(by.css('.view')).click();
    }
}