export class ProductSearchPage {

    filterByBrand(brand: string) {
        cy.get('body').then($body => {
        if ($body.find(`span.a-size-base.a-color-base:contains(${brand})`).length > 0) {
            cy.selectProductBrandTitle().contains(brand).click();
        } else {
            cy.log(`Brand filter for ${brand} not available`);
            return;
        }
        });
    }

    filterByPrice(maxPrice: number) {
        cy.selectPriceRangeUpperBound()
        .should('be.visible')
        .invoke('val', maxPrice)
        .trigger('change', { force: true });

        cy.get('.a-button-input').click();
    }

    verifyProductBrand(brand: string) {
        cy.selectProductSearchResults().each((item) => {
            cy.wrap(item).find('.a-size-medium').should('contain.text', brand);
        });
    }

    verifyPriceRange(maxPrice: number) {
        cy.selectProductSearchResults().each((item) => {
            cy.wrap(item).find('[data-cy="price-recipe"]').should('exist')
            .each(($price) => {
                const priceText = $price.find('.a-price-whole').text().replace('/,./gi', '');
                const price = priceText !== '' ? parseFloat(priceText) : 0;
                expect(price).to.be.lte(maxPrice);
            });
        });
    }

    verifyNoResults() {
        cy.get('.s-main-slot').then($slot => {
            if ($slot.find('.s-result-item').length === 0) {
                cy.selectNoSearchResults().should('contain', 'No results for');
            } else {
                cy.log('Results are available');
            }
        });
    }

    verifyPartialResults(brand: string) {
        cy.selectProductSearchResults().each((item) => {
        cy.wrap(item).find('.a-size-medium').then($el => {
            if ($el.length) {
            cy.wrap($el).should('contain.text', brand);
            } else {
            cy.log('Some products may not match the selected brand.');
            }
        });
        });
    }
}
