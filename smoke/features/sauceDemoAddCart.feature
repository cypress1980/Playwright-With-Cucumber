@smoke
Feature: Sauce Demo purchase flow

  Scenario: Successful purchase flow for one product
    Given I open the saucedemo homepage
    When I login with standard user
    And I add one product to the cart
    And I open the cart
    And I click checkout
    And I enter checkout information
    And I continue to overview
    And I finish the order
    Then I should see the success message "Thank you for your order!"
