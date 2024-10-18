export class HomePage {
    visit() {
        cy.visit('');
    }

    disableCookie() {
        cy.selectCookiesBtn().click();
    }

    searchProduct(product: string) {
        cy.selectSearchTab().type(product);
        cy.selectSearchSubmitBtn().click();
    }
}
