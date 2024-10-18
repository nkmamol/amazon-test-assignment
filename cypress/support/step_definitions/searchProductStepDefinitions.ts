import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../../pages/HomePage';
import { ProductSearchPage } from "../../pages/ProductSearchPage";
import { testData } from '../../fixtures/testData';

const homePage = new HomePage();
const productSearchResultPage = new ProductSearchPage();

Given('I open Amazon\'s homepage', () => {
  cy.log('Visiting Amazon homepage');
  homePage.visit();
  homePage.disableCookie();
});

When('I search for a product', () => {
  cy.log('I search for a product');
  homePage.searchProduct(testData.validSearch.searchTerm);
});

When('I apply a brand filter', () => {
  cy.log('I apply a brand filter');
  productSearchResultPage.filterByBrand(testData.validSearch.brand);
});

When('I apply a max price range filter', () => {
  productSearchResultPage.filterByPrice(testData.validSearch.priceRange.max);
});

Then('I should see the correct search results for the product and brand', () => {
  productSearchResultPage.verifyProductBrand(testData.validSearch.brand);
});

Then('I should see the correct search results for the product within price range', () => {
  productSearchResultPage.verifyPriceRange(testData.validSearch.priceRange.max);
});

When('I search for an invalid product', () => {
  homePage.searchProduct('invalid product name');
});

Then('I should see no search results', () => {
  productSearchResultPage.verifyNoResults();
});
