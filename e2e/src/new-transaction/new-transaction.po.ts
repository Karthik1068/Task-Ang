import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class NewTransactionPage {
    private credentials = {
        phone: '9954328855',
        transferAmt: '2500',
        reference: 'CUS2021026',
        address: '5/32 1st street',
        customerName: "Karthik",
        customerNumber: '77889'
    };

    navigateTo() {
        return browser.get('/new-transaction');
    }

    navigateDefault() {
        return browser.get('/');
    }

    newTransactionSubmit() {
            element(by.css('.new')).click();
    }

    logout() {
        setTimeout(() => {
            element(by.css('.logout')).click();
        }, 2000);
    }

    navigateTotrans() {
        return browser.get('/home');
    }

    fillCredentials() {
        setTimeout(() => {
            element(by.css('[name="phone"]')).sendKeys(this.credentials.phone);
            element(by.css('[name="transferAmt"]')).sendKeys(this.credentials.transferAmt);
            element(by.css('[name="reference"]')).sendKeys(this.credentials.phone);
            element(by.css('[name="customerNumber"]')).sendKeys(this.credentials.customerNumber);
            element(by.css('[name="address"]')).sendKeys(this.credentials.phone);
            element(by.css('[name="customerName"]')).sendKeys(this.credentials.customerName);
        }, 2000);
    }

    getPhoneErrorMessage() {
        setTimeout(() => {
            return element(by.css('invalid')).getText();
        }, 1000);
    }
    getTransferAmtErrorMessage() {
        setTimeout(() => {
            return element(by.css('invalid')).getText();
        }, 1000);
    }

}