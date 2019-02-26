/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  
context("BrowseAsosHomePage", () => {
    beforeEach(() => {    
        cy
          .visit('https://www.asos.com/')
    })

    it('search for clothes', () => 
    {
        cy
        .get('input[id="chrome-search"]')
        .type('clothes')
        .should('have.value', 'clothes') 
        
        cy
        .get('button[data-testid="search-button-inline"]')
        .click()  
        
        cy
        .get('input[id="chrome-search"]')        
        .should('have.value', '')   
        
        cy.
        get('article')
        .first()
        .click()
        cy.
        get('div[class="product-code"]').scrollIntoView()

        cy.
        get('select[data-id="sizeSelect"]').first().scrollIntoView()                
        .select('UK 6')

        cy
        .contains('Add to bag')
        .click()

        cy
        .wait(2000)
        .get('#miniBagDropdown > a')
        .trigger('mouseover')
        .get('a[data-test-id= "checkout-link"]')
        .click()
        
        cy
        .get('iframe[title="recaptcha challenge"]')
        .parent()
        .parent()
        .then(function($element){
            $element.attr("class", "disabled-element")
        })


        cy
        .get('iframe[title="recaptcha challenge"]')
        .parent()        
        .then(function($element){
            $element.attr("class", "disabled-element")
        })

        cy
        .get('iframe[title="recaptcha challenge"]')        
        .then(function($element){
            $element.attr("class", "disabled-element")
        })

        cy
        .get('#EmailAddress')
        .type('anuraga@asos.com')
        .should('have.value', 'anuraga@asos.com')

        cy
        .get('#Password')
        .type('Password11', { log: false })
        .get('#signin')
        .click()

      
    })
})