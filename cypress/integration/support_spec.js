/// <reference types="cypress" />

describe('Shopping App - Support', () => {

    it('loads support page', () => {
        cy.visit('/support');

        cy.get('[id="contact-header"]');
    });
})