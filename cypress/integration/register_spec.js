/// <reference types="cypress" />

describe('Shopping App - Register', () => {

    it('registers the user & navigate to login page', () => {
        cy.visit('/register');
        cy.pause();
        cy.get('input[id="name"]').type('Lorem Ipsum');
        cy.get('input[id="email"]').type('lorem.ipsum@abc.com');
        cy.get('input[id="username"]').type('lorem');
        cy.get('input[id="password"]').type('abcd@1234');
        cy.get('input[id="confirmPassword"]').type('abcd@1234');
        cy.pause();
        cy.get('[id="register-button"]').click();

        cy.url().should('include', '/login');
    });
});