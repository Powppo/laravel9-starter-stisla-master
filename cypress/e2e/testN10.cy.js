describe('CRUD of permission cypress to the page', () => {
  it('Login page can be opened', () => {
    cy.visit('http://127.0.0.1:8000');

        //User can Login
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('password')
        cy.get('.btn').click()

        //User can Crete New Permission
        cy.contains('Permission List').click({force: true})
        cy.contains('Create New Permission').click({force: true})
        cy.get('#name').type('permission')
        cy.get(':nth-child(3) > .form-control').type('web')
        cy.contains('Submit').click({force: true})
        
        //User can Edit
        cy.get("#app > div > div.main-content > section > div.section-body > div:nth-child(3) > div > div > div.card-body > div.table-responsive > div > nav > ul > li:nth-child(5) > a").click(({force: true}))
        cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').should("have.text", "#");
        cy.get('.table > tbody > :nth-child(9) > :nth-child(1)').should("have.text", "38\n                                                ");
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "Name");
        cy.get('.table > tbody > :nth-child(9) > :nth-child(2)').should("have.text", "permission");
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Guard Name");
        cy.get('tbody > :nth-child(9) > :nth-child(3)').should("have.text", "webweb");
        cy.get('tbody > :nth-child(1) > .text-right').should("have.text", "Action");
        cy.get(':nth-child(9) > .text-right').contains("Edit").click({force: true});
        cy.get(':nth-child(3) > .form-control').type('x')
        cy.get(':nth-child(4) > .form-control').type('x')
        cy.contains('Submit').click({force: true})
        cy.get("#app > div > div.main-content > section > div.section-body > div:nth-child(3) > div > div > div.card-body > div.table-responsive > div > nav > ul > li:nth-child(5) > a").click(({force: true}))
        cy.get(':nth-child(9) > .text-right').contains("Delete").click({force: true});
  })
})  