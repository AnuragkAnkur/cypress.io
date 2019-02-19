/// <reference types="Cypress" />

context("BrowseEbayHomePage", () => {
    beforeEach(() => {
        cy.visit('https://www.ebay.com/')
    })

    it('search for clothes', () => 
    {
        cy
        .get('input[id="gh-ac"]')
        .type('clothes')
        .should('have.value', 'clothes')
    })
})