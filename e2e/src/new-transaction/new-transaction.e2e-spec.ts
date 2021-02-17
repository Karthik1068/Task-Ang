import { NewTransactionPage } from './new-transaction.po';
import { browser, protractor, element, by } from 'protractor';

describe('protractor E2E - New Transaction Page', () => {
    let page: NewTransactionPage;

    const wrongcredentials = {
        reference: 'CUS2021175',
        customerNumber: 234568,
        customerName: 'TEST',
        address: 'abc testing',
        phone: '45435435',
        transferAmount: '',
        transferCurrency: 'INR',
        beneficiaryBank: 'SWISS',
        beneficiary_accno: '878787',
        payment_details: 'credit'
    };

    beforeEach(() => {
        page = new NewTransactionPage();
    });

    it('User enter into new transaction form, it add the fields', () => {
        page.navigateTotrans();
        page.fillCredentials();
    });

    it('User clicks logout, redirects to login page', () => {
        page.navigateDefault();
        page.logout();
    });
});