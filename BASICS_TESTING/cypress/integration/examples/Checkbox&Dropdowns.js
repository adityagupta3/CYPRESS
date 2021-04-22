describe('TESTING',function(){

    it('test case 1',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Check and uncheck CHeckboxes and verify their state
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // Pass an array of checkboxes and check/uncheck them all at once
        cy.get('input[type="checkbox"]').check(['option1','option2'])

        // Static Dropdowns
        cy.get('select#dropdown-class-example').select('Option2').should('have.value','option2')

        //Dynamic Dropdowns - Generic each loop
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item-wrapper').each(($ele,index,$list) => {
            if($ele.text().includes('British Indian Ocean Territory')){
                cy.wrap($ele).click()
            }
        })

        cy.get('#autocomplete').should('have.value','British Indian Ocean Territory')

        
    })
})