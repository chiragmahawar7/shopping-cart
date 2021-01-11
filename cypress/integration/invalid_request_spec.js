/// <reference types="cypress" />

describe('Shopping App', () => {

    it('loads page not found page when invalid url is passed', () => {
        cy.visit('/fav');

        cy.get('[id="not-found-header"]');
        cy.get('[id="home"]');
    });

    it('clicking Go Back To Home will navigate to shop page', () => {
        cy.visit('/fav');
        cy.get('[id="home"]').click();

        cy.url().should('include', '/shop');
    });
})