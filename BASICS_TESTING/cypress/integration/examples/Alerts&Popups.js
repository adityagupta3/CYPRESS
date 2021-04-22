describe('TESTING',function(){

    it('test case 1',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#alertbtn').click()
       
       //Get Text from Alert popups
        cy.on('window.alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

       
        //Get text from Confirm popups
        cy.get('#confirmbtn').click()
        cy.on('window.confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})