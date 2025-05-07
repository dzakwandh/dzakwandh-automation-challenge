describe('Booking Mentor Feature', () => {
    it('should be able to book a mentor', () => {
        const randomName = Cypress.env('randomName');
        const randomEmail = Cypress.env('randomEmail');
        const password = Cypress.env('password');
    
        cy.get('#searchMentor').should('be.visible').type('Anya Forger');
        cy.wait(1000);
        cy.get('a[href="/mentoring/anya-forger-407"]').click();
        cy.contains('button', 'Ajukan Jadwal').click();
        cy.get('.col-start-1 > .relative').click();
        cy.contains('button', 'Selanjutnya').click();
    
        cy.contains('button', 'Select Date Range').click();
        cy.get('.rmdp-right').click();
        cy.get('[aria-label="Choose Wednesday June 11 of 2025"] > .sd').click();
        cy.get('[aria-label="Choose Thursday June 12 of 2025"] > .sd').click();
        cy.get('.rmdp-container > :nth-child(1) > .h-9').click();
        cy.get('#proposedTimes_0_startTime').type('08:00');
        cy.get('#proposedTimes_0_endTime').type('09:00');
        cy.contains('.ant-select', 'Choose mentoring location').find('.ant-select-selector').click();
        cy.contains('Offline at Setia Budi, Jakarta Selatan').click();
        cy.get('#notes').clear().type('Thi is some test notes by Dzakwan to know what is going on');
        cy.contains('button', 'Selanjutnya').click();
    
        cy.get('#fullName').type(randomName);
        cy.get('#email').type(randomEmail);
        cy.get('#whatsapp').type('628123456789');
        cy.get('#birthDate').type('01/01/2000');
        cy.contains('button', 'Selanjutnya').click();
    
        cy.get('#password').type(password);
        cy.get('#confirmPassword').type(password);
        cy.get(':nth-child(1) > .ant-checkbox-wrapper > :nth-child(2)').click();
        cy.get(':nth-child(2) > .ant-checkbox-wrapper > :nth-child(2)').click();
        cy.contains('button', 'Selesai').click();
    
        cy.contains('button', 'Lihat Detailnya').click();
        cy.url().should('include', '/mentoring/my-session');
        cy.get(':nth-child(2) > .mt-4').contains('Anya Forger');
    
      });
})