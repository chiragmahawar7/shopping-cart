/// <reference types="cypress" />

describe('Shopping App - Navigation Bar', () => {

    it('clicking on app nav title will navigate to /shop', () => {
        cy.visit('/');
        cy.get('[id="header"]').click();

        cy.url().should('include', '/shop');
    });

    it('clicking on Shop nav will navigate to /shop', () => {
        cy.visit('/');
        cy.get('[id="nav-shop"]').click();

        cy.url().should('include', '/shop');
    });

    it('clicking on Support nav will navigate to /support', () => {
        cy.visit('/');
        cy.get('[id="nav-support"]').click();

        cy.url().should('include', '/support');
    });

    it('clicking on Signup button will navigate to /register', () => {
        cy.visit('/');
        cy.get('[id="nav-signup"]').click();

        cy.url().should('include', '/register');
    });

    it('clicking on Login button will navigate to /login', () => {
        cy.visit('/');
        cy.get('[id="nav-login"]').click();

        cy.url().should('include', '/login');
    });
})