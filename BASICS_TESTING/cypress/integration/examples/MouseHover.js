const { takeRight } = require("cypress/types/lodash")

describe('Mouse Hover',function(){

    it('Show Menu',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        /* Mouse hover is not supported in cypress
        but JQUERY method 'show' can be used to 
        make elements visible on screen
        */
        
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

        /* This does the same stuff as
        above code but the menu/elements that
        should get visible when mouse hovered
        are not visible

        {force:true} : Click on the element regardless its
        actionable state (visible/invisible)
        */

        cy.contains('Top').click({force:true})

    })
})