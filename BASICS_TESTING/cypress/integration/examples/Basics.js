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

        cy.get('img[alt="Cart"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    })
})