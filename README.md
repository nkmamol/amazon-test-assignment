# amazon-test-assignment

# Frontend Testing with Cypress/TypeScript and Gherkin

This assiment was given to demonstrates frontend testing using Cypress/TypeScript to check below Acceptence criteria -
Launch amazon website
Search for a product
At the search result page, choose brand
Verify the search results are matching the product you selected, brand and price range. 

Note: Product and brand should be passed as test data from the test data file ( this could be CSV, or json or excel )
Apply coding standards, error handlings, assertions, page files, setup, teardown

## Installation and Setup

1. Clone this repository:
    ```bash
    git clone https://github.com/nkmamol/amazon-test-assignment.git
    ```
   
2. Install dependencies:
    ```bash
    npm install
    ```

3. Open Cypress:
    ```bash
    npm run test:open
    ```

4. To run tests in headless mode:
    ```bash
    npm run test:run
    ```


## Test Examples

### Login Scenarios

1. **Successfully search for a product and apply brand filter**
   - **Feature:** Amazon product search and filter
   - **Purpose:** we are testing search product with brand name and verifying the price range withing selected range
   - **Steps:**<br />
	    Given I open Amazon's homepage <br />
            When I search for a product <br />
            And I apply a brand filter <br />
            And I apply a max price range filter <br />
            Then I should see the correct search results for the product and brand <br />
            And I should see the correct search results for the product within price range <br />

2. **Search for an invalid productt**
   - **Feature:** Amazon product search and filter
   - **Purpose:** We are testing this scenario to ensure if user search with invalid product should not show search result.
   - **Steps:** <br />
	    Given I open Amazon's homepage <br />
            When I search for an invalid product <br />
            Then I should see no search results <br />

## Technology Stack

- **Cypress** - Frontend testing tool
- **TypeScript** - Programming language used for development
- **Gherkin** - BDD language for writing test scenarios
- **Cucumber Preprocessor** - For integrating Gherkin with Cypress
- **MOchaAwesome Reporter** - plugin used to generrate the Report 

