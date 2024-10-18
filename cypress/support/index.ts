import 'cypress-mochawesome-reporter/register';

import homePageLocators from './locators/homePageLocators';
import productSearchPageLocators from './locators/productSearchPageLocators';

homePageLocators(Cypress);
productSearchPageLocators(Cypress);

beforeEach(() => {
    cy.log('Starting a new test...');
});

afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log('Test is completed!');
});
