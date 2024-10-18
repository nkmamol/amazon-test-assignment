export default function homePageLocators(Cypress: Cypress.Cypress) {
    Cypress.Commands.add('selectCookiesBtn', (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('#sp-cc-rejectall-link'));
    Cypress.Commands.add('selectSearchTab', (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('#twotabsearchtextbox'));
    Cypress.Commands.add('selectSearchSubmitBtn', (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('#nav-search-submit-button'));

    Cypress.Commands.add('selectProductBrandTitle', () => cy.get('span.a-size-base.a-color-base'));
    Cypress.Commands.add('selectPriceRangeUpperBound', () => cy.get('.s-upper-bound input[type="range"].s-range-input'));
    Cypress.Commands.add('selectProductSearchResults', () => cy.get('.s-main-slot [data-component-type="s-search-result"]'));
}
