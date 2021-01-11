/// <reference types="cypress" />

describe('Shopping App - Login', () => {

    it('login the user & redirect to shop page', () => {
        cy.visit('/login');
        cy.pause();

        cy.get('input[id="username"]').type('lorem');
        cy.get('input[id="password"]').type('abcd@1234');
        cy.get('input[id="remember"]').click();
        cy.pause();

        cy.get('[id="login-button"]').click();
        cy.url().should('include', '/shop');
    });
})