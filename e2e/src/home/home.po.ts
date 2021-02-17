import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class HomePage {
    navigateTotrans() {
        return browser.get('/home');
    }
   
}