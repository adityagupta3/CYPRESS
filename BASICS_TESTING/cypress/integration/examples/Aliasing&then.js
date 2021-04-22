describe('Rahul SUAR shetty',function(){

    it('test',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input.search-keyword').type('cu') 
        cy.wait(2000)
        
        //Assertion SHOULD is used -- have.length is a kind of method
        cy.get('.product:visible').should('have.length',2) 
       
       // Eq =1 is the location/n th element from list of elements
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
       
       
       //This each method allows us to iterate over all the elements fetched by locator .product
       cy.get('.products').find('.product').each(($e,index,$list) => {
            if($e.find('h4.product-name').text().includes('Cucumber')){
                $e.find('button').click()  
            }
        })

        console.log("ADITYA CONSOLE TEST")

        //Then allows us to store locators in asynchronous code
        cy.get('.brand').then(function(ele){
            cy.log(ele.text())
           
        })


        cy.get('.brand').should('have.text','GREENKART')


        //Aliasing in cypress can be done over an element by .as
        cy.get('.brand').as('logo')
        cy.log( cy.get('@logo') )

        console.log("ADITYA CONSOLE TEST")


    })
})