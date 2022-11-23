describe('CRUD of Role cypress to the page', () => {
  it('Login page can be opened', () => {
    cy.visit('http://127.0.0.1:8000');

        //User can Login
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('password')
        cy.get('.btn').click()

        //User can Create Role
        cy.contains('Role List').click({force: true})
        cy.contains('Create New Role').click({force: true})
        cy.get('#name').type('QA')
        cy.get(':nth-child(3) > .form-control').type('x')
        cy.contains('Submit').click({force: true})

        //User Can Edit
        cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').should("have.text", "#");
        cy.get('.table > tbody > :nth-child(4) > :nth-child(1)').should("have.text", "3");
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "Name");
        cy.get('.table > tbody > :nth-child(4) > :nth-child(2)').should("have.text", "QA");
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Guard Name");
        cy.get('tbody > :nth-child(4) > :nth-child(3)').should("have.text", "webx");
        cy.get('tbody > :nth-child(1) > .text-right').should("have.text", "Action");
        cy.get(':nth-child(4) > .text-right').contains("Edit").click({force: true});
        cy.get(':nth-child(3) > .form-control').type('x')
        cy.get(':nth-child(4) > .form-control').type('x')
        cy.contains('Submit').click({force: true})

        //User can Delete
        cy.get(':nth-child(4) > .text-right').contains("Delete").click({force: true});
  })
})  