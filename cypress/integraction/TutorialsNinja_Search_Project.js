describe('E-commerce Site Tests', () => {
    
    // This block runs before each test to ensure a clean state
    beforeEach(() => {
        // Visit the demo website before each test
        cy.visit('https://tutorialsninja.com/demo/');
    });

    // Grouping tests related to user registration
    describe('RegisterForm', () => {
        it('should register a new user successfully', () => {
            // Navigate to the registration page
            cy.get('.caret').click();
            cy.get('a[href="https://tutorialsninja.com/demo/index.php?route=account/register"]').click();

            // Fill in the registration form fields
            cy.get('input[placeholder="First Name"]').type('Faneshwar');
            cy.get('input[placeholder="Last Name"]').type('Gite');
            cy.get('input[placeholder="E-Mail"]').type('Fanugite000@gmail.com');
            cy.get('input[placeholder="Telephone"]').type('9322405505');
            cy.get('input[placeholder="Password"]').type('Pass@123');
            cy.get('input[placeholder="Password Confirm"]').type('Pass@123');

            // Subscribe to newsletter and agree to terms
            cy.get('[name="newsletter"][value="1"]').click();
            cy.get('input[type="checkbox"]').click();
            cy.get('input[type="submit"]').click();

            // Verify successful registration message
            cy.url().should('include', 'account/success');
            cy.contains('Your Account Has Been Created!').should('be.visible');
        });
    });

    // Grouping tests related to user login
    describe('LoginPage', () => {
        it('should log in successfully', () => {
            // Navigate to the login page
            cy.get('.caret').click();
            cy.get('a[href*="route=account/login"]').click();
            // Fill in login credentials
            cy.get('[placeholder="E-Mail Address"]').type('faneshwargite2018@gmail.com');
            cy.get('[placeholder="Password"]').type('Pass@123');
            cy.get('input[type="submit"]').click();
            // Verify that the user is logged in
            cy.url().should('include', 'account/account');
        });
    });

    // Grouping tests related to logging out
    describe('LogOutPage', () => {
        it('should log out successfully', () => {
            // Click on My Account and navigate to logout
            cy.get('[title="My Account"]').click();
            cy.visit('https://tutorialsninja.com/demo/index.php?route=account/logout');
            // Verify the logout process
            cy.get('.pull-right').contains('Continue').click();
        });
    });

    // Grouping tests related to password recovery
    describe('FormatPage', () => {
        it('should format password', () => {
            // Navigate to login page and then to forgotten password
            cy.get('.caret').click();
            cy.get('a[href*="route=account/login"]').click();
            cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/forgotten"])[1]').click();
            cy.get('#input-email').type('faneshwargite2018@gmail.com');
            cy.get('[type="submit"]').click();
        });
    });

    // Grouping tests related to product search functionality
    describe('Product Search Tests', () => {
        it('should search for an existing product', () => {
            // Perform a search for an existing product
            cy.get('input[name="search"]').type('iPhone');
            cy.get('.btn-default.btn-lg').click();
            // Verify that products are displayed
            cy.get('.product-layout').should('exist');
        });

        it('should search for a non-existing product', () => {
            // Perform a search for a non-existing product
            cy.get('input[name="search"]').clear().type('XYZ12345');
            cy.get('.btn-default.btn-lg').click();
            // Verify that no products are displayed
            cy.get('.product-layout').should('not.exist');
        });

        it('should search with empty input', () => {
            // Clear the search input and search
            cy.get('input[name="search"]').clear();
            cy.get('.btn-default.btn-lg').click();
            // Check if any products are found
            cy.get('body').then((body) => {
                if (body.find('.product-layout').length) {
                    cy.log('Elements exist');
                } else {
                    cy.log('No elements found');
                }
            });
        });

        it('should search for multiple products', () => {
            // Search for multiple products
            cy.get('input[name="search"]').clear().type('Camera');
            cy.get('.btn-default.btn-lg').click();
            // Verify if products are found
            cy.get('body').then(($body) => {
                if ($body.find('.product-layout').length) {
                    cy.log('Elements found');
                } else {
                    cy.log('No elements found');
                }
            });
        });
    });
});
