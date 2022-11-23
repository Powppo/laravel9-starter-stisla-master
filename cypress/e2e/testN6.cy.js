describe('CRUD of Menu Group cypress to the page', () => {
  it('Login page can be opened', () => {
    cy.visit('http://127.0.0.1:8000');

        //User can Login
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('password')
        cy.get('.btn').click()

        //User can Create Menu Group
        cy.contains('Menu Group').click({force: true})
        cy.contains('Create New Menu Group').click({force: true})
        cy.get('#name').type('Testx')
        cy.get(':nth-child(3) > .form-control').type('testx')
        cy.get('#permission_name').select('dashboard', {force: true})
        cy.contains('Submit').click({force: true})

        //User can Edit
        cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').should("have.text", "#");
        cy.get('.table > tbody > :nth-child(6) > :nth-child(1)').should("have.text", "5");
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "Name");
        cy.get('.table > tbody > :nth-child(6) > :nth-child(2)').should("have.text", "Testx");
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Permission");
        cy.get('tbody > :nth-child(6) > :nth-child(3)').should("have.text", "dashboard");
        cy.get('tbody > :nth-child(1) > .text-right').should("have.text", "Action");
        cy.get(':nth-child(6) > .text-right').contains("Edit").click({force: true});
        cy.get(':nth-child(3) > .form-control').type('zz')
        cy.contains('Submit').click({force: true})

        //User can Delete
        cy.get(':nth-child(6) > .text-right').contains("Delete").click({force: true}); 
  })
})  