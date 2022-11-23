describe('CRUD of Menu Item cypress to the page', () => {
  it('Login page can be opened', () => {
    cy.visit('http://127.0.0.1:8000');

        //User can login
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('password')
        cy.get('.btn').click()

        //User can create new Menu Item
        cy.contains('Menu Item').click({force: true})
        cy.contains('Create New Menu Item').click({force: true})
        cy.get('#parent').select('Users Management', {force: true})
        cy.get('#name').type('item name 1')
        cy.get('#permission_name').type('Permission 1')
        cy.get('#url').select('_debugbar/open', {force: true})
        cy.contains('Submit').click({force: true})

        //User can Edit data
        cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').should("have.text", "#");
        cy.get('.table > tbody > :nth-child(10) > :nth-child(1)').should("have.text", "9");
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "Parent");
        cy.get('.table > tbody > :nth-child(10) > :nth-child(2)').should("have.text", "Users Management");
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Name");
        cy.get('tbody > :nth-child(10) > :nth-child(3)').should("have.text", "item name 1");
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should("have.text", "Url");
        cy.get('tbody > :nth-child(10) > :nth-child(4)').should("have.text", "_debugbar/open");
        cy.get('tbody > :nth-child(1) > :nth-child(5)').should("have.text", "Permission");
        cy.get('tbody > :nth-child(10) > :nth-child(5)').should("have.text", "Permission 1");
        cy.get('tbody > :nth-child(1) > .text-right').should("have.text", "Action");

        //User can delete data
        cy.get(':nth-child(10) > .text-right').contains("Delete").click({force: true});
  })
})  