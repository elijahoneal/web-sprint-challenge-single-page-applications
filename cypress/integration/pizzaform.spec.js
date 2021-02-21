describe( " Fill Out and Submit Form" , () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    } )
    it("Basic Test", () => {
        expect(1+1).to.equal(2)
    })

} )