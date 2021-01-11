describe('Shopping Cart', () => {
    it('Sample test', () => {
        expect(true).to.equal(true);
    });

    it('visit the page', () => {
        cy.visit('/');
    });

    it('has title- ShoppingCart', () => {
        cy.title().should('eq', 'ShoppingCart');
    });
});