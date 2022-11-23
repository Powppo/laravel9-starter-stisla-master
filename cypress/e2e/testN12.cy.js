describe('CRUD of User to Role cypress to the page', () => {
  it('Login page can be opened', () => {
    cy.visit('http://127.0.0.1:8000');

        //User can Login
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('password')
        cy.get('.btn').click()

        //User can Assign User to Role
        cy.contains('User To Role').click({force: true})
        cy.contains('Assign User To Role').click({force: true})
        cy.get('#user').select('user', {force: true})
        cy.get('#role').select('super-admin', {force: true})
        cy.contains('Submit').click({force: true})

        //User can Edit
        cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').should("have.text", "#");
        cy.get('.table > tbody > :nth-child(2) > :nth-child(1)').should("have.text", "1");
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "Name");
        cy.get('.table > tbody > :nth-child(3) > :nth-child(2)').should("have.text", "user");
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Email");
        cy.get('tbody > :nth-child(3) > :nth-child(3)').should("have.text", "user@gmail.com");
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should("have.text", "Roles");
        cy.get('tbody > :nth-child(3) > :nth-child(4)').should("have.text", "user, super-admin");
        cy.get('tbody > :nth-child(1) > .text-right').should("have.text", "Action");
        cy.get(':nth-child(3) > .text-right').contains("Edit").click({force: true});
        cy.get('#role').select('user', {force: true})
        cy.contains('Submit').click({froce: true})

  })
})  