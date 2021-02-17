import { browser, by, element } from 'protractor';

export class LoginPage {
    private credentials = {
        userId: 'admin',
        password: 'admin'
    };

    navigateTo() {
        return browser.get('/');
    }
    navigateToHome() {
        return browser.get('/home');
    }

    fillCredentials(credentials: any = this.credentials) {
        element(by.css('[name="userId"]')).sendKeys(credentials.userId);
        element(by.css('[name="password"]')).sendKeys(credentials.password);
        element(by.css('.login100-form-btn')).click();
    }

    getErrorMessage() {
        return element(by.css('.invalid-login')).getText();
    }
    getPhoneErrorMessage() {
        return element(by.css('.invalid-login')).getText();
    }
    getTransferAmountErrorMessage() {
        return element(by.css('.invalid-login')).getText();
    }
}