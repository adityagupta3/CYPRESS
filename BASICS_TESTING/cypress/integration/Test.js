/// <reference types="Cypress"/>

describe('Test Suite',function(){

    it('TEST CASE 1',function(){
        cy.visit("www.google.com")
        cy.get('input[name="q"]').type('ADITYA')
        cy.get('input[name="q"]').type('{enter}')
        //cy.get('input[aria-label="Google Search"]:nth-child(1)').click
    })
})