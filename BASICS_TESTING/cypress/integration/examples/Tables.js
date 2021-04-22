describe('Tables',function(){

    it('Test',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Each loop to get Column and each loop again to iterate over that column
        // Storing index didnt work for me as of now because JS is asynchronous, hence 2 loops

        cy.get('table[name="courses"] tr th').each(($ele,index,$list) => {
           if($ele.text().includes('Course')){
                //no = index
                //cy.log(no)
                cy.log(index)
                cy.get('table[name="courses"] tr td:nth-child('+ (index+1) +')').each(($e,ind,$list1) => {
                    if($e.text().includes('Selenium')){
                        cy.log($e.text() +',  Index = ' + ind)
                        const amount = $e.next().text()
                        cy.log('Amount = '+amount)
                    }
                })
           }
        })

     //   cy.log(no)
    })
})