describe("Filling out and cancelling inputs", () =>{
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");

    })
    it("Can navigate to the proper site", () => {
        cy.url().should("include", "localhost");
    })

    it("Can type in the inputs", () => {
        cy.get('[name="name"]')
        .should("have.value", "")
        .type("Michelangelo")
        .should("have.value", "Michelangelo");

        cy.get('[name="instructions"]')
        .should("have.value", "")
        .type("Please leave pizza next to sewer drain on 8th st")
      
    })
});

describe("Pick an option from the select list", () =>{
    it("Can select a pizza size", () =>{
        cy.get('#size')
        .select('18in');

    })
} )

describe("Selecting pizza toppings", () => {
    it("Can select checkbox", () => {
        cy.get('#pepperoni')
        .click();

        cy.get('#sausage')
        .click();

        cy.get('#beef')
        .click();

        cy.get('#chicken')
        .click();
    })
})