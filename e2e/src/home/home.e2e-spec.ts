import { HomePage } from './home.po';
import { browser, protractor, element, by } from 'protractor';

describe('protractor E2E - Home Page', () => {
    let page: HomePage;
    beforeEach(() => {
        page = new HomePage();
    });
})