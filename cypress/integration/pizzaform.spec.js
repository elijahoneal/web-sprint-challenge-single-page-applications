
describe( " Fill Out and Submit Form" , () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/pizza')
    } )
    it("Basic Test", () => {
        expect(1+1).to.equal(2)
    })

    const nameInput = () => cy.get('[data-cy=nameInput]')
    const sizeSelect = () => cy.get('[data-cy=sizeSelect]')
    const toppingCheckbox = (topping) => cy.get(`[data-cy=${topping}box]`)
    const introInput = () => cy.get('[data-cy=introInput]')
    const button = () => cy.get('[data-cy=button]')
    const toppings = ['spinach', 'mushrooms', 'olives', 'jalapenos',
        'pineapple', 'pepperoni', 'beef', 'chicken']
    it("Enter Pizza Details", ()=>{
        nameInput()
        .should('have.value', '')
        .type('Leonardo')
        .should('have.value', 'Leonardo')

        sizeSelect()
        .select('18in')
        .should('have.value', '18in')

        toppings.forEach( topping => {
                    
            toppingCheckbox(topping)
            .check()
        })

        introInput()
        .should('have.value', '')
        .type('Please deliver to 122 and an eighth. Forgiveness is divine, but never pay full price for late pizza.')
        .should('have.value', 'Please deliver to 122 and an eighth. Forgiveness is divine, but never pay full price for late pizza.')

        button().click()
    })
        
        
} )