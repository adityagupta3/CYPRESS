describe('TESTING',function(){

    it('test case 1',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        /*
        Remove attribute target from element that is r
        esponsible for opening tab in new page 
        and then click on the element 
        so that the new tab/Window opens in the asme window/tab 
        */

        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.go('back')

      //  cy.get('#openwindow').invoke('removeAttr', 'onclick').click()
   
    })
})