export default function productSearchPageLocators(Cypress: Cypress.Cypress) {
    Cypress.Commands.add('selectProductBrandTitle', (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('span.a-size-base.a-color-base'));
    Cypress.Commands.add('selectPriceRangeUpperBound', (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('.s-upper-bound input[type="range"]'));
    Cypress.Commands.add('selectProductSearchResults', (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('.s-main-slot [data-component-type="s-search-result"]'));
    Cypress.Commands.add('selectNoSearchResults', ():Cypress.Chainable<JQuery<HTMLElement>> => cy.get('.a-color-state')); 
}
