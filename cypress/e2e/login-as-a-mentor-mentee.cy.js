describe('Login as Mentor/Mentee Feature', () => {
    it('should be logged in as a valid mentor/mentee', () => {
        const randomName = Cypress.env('randomName');
        const randomEmail = Cypress.env('randomEmail');
        const password = Cypress.env('password');
        const randomWhatsapp = Cypress.env('randomWhatsapp');

        cy.get('#dealls-navbar-login-btn').click();
        cy.get('#basic_email').type('japahila@gmail.com')
        cy.get('#basic_password').type('Tes12345');
        cy.contains('button','Sign In').click();
        cy.contains('Email Not found').should('not.exist');
        cy.contains('Password WRONG').should('not.exist');
    });
})