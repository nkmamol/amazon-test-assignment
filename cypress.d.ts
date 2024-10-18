// cypress.d.ts
declare namespace Cypress {
    interface Chainable {
        selectCookiesBtn(): Chainable<JQuery<HTMLElement>>;
        selectSearchTab(): Chainable<JQuery<HTMLElement>>;
        selectSearchSubmitBtn(): Chainable<JQuery<HTMLElement>>;
        selectProductBrandTitle(): Chainable<JQuery<HTMLElement>>;
        selectPriceRangeUpperBound(): Chainable<JQuery<HTMLElement>>;
        selectProductSearchResults(): Chainable<JQuery<HTMLElement>>;
        selectNoSearchResults(): Chainable<JQuery<HTMLElement>>;
    }
}
