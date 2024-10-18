Feature: Amazon product search and filter

        Scenario: Successfully search for a product and apply brand filter
            Given I open Amazon's homepage
            When I search for a product
            And I apply a brand filter
            And I apply a max price range filter
            Then I should see the correct search results for the product and brand
            And I should see the correct search results for the product within price range

        Scenario: Search for an invalid product
            Given I open Amazon's homepage
            When I search for an invalid product
            Then I should see no search results
