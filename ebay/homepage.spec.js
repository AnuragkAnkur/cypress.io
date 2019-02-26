/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  
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

        cy
        .get('input[id="gh-btn"]')
        .click()    
        
        cy
        .get('input[id="gh-ac"]')        
        .should('have.value', 'clothes')    
    })
})