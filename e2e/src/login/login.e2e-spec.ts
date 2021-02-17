import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
import { HomePage } from '../home/home.po';
import { NewTransactionPage } from '../new-transaction/new-transaction.po';
import { OldTransactionPage } from '../old-transactions/old-transaction.po';

describe('protractor-E2E - Login page', () => {
    let page: LoginPage;
    let homePage: HomePage;
    let newTransactionPage: NewTransactionPage;
    let oldTransactionPage: OldTransactionPage

    const wrongcredentials = {
        userId: 'wrongname',
        password: 'wrongpasswd'
    };
    const correctcredentials = {
        userId: 'admin',
        password: 'admin'
    };

    beforeEach(() => {
        page = new LoginPage();
    });

    it('If login is successful, It will redirect to home page',
    () => {
        page.fillCredentials(correctcredentials);
        page.navigateToHome();
    });

    it('User enters to home page, it shows "New transaction & view submitted transaction" cards', 
    
    () => {
        setTimeout(() => {
            homePage.navigateTotrans();
        }, 2000);
    });

    it('User clicks New transaction, it will navigate to the New-transaction screen', 
    () => {
        setTimeout(() => {
            newTransactionPage.navigateTo();
            newTransactionPage.newTransactionSubmit();
        }, 2000);
    });

    it('User clicks on view submitted transaction, it will show the old transaction list', 
    () => {
        setTimeout(() => {
            oldTransactionPage.oldTransactionClick();
            oldTransactionPage.navigateTotrans();
        }, 2000);
    });
});