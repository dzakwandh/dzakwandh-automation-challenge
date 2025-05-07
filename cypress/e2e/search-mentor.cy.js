describe('Search Mentor Feature', () => {
  it('should be on the mentoring page', () => {
    cy.url().should('include', '/mentoring');
    cy.get('.gap-3 > .flex > .relative').should('be.visible');
    cy.get(':nth-child(4) > .mt-4').should('exist');
  });

  it('should show result when searching with valid keyword', () => {
    cy.get('#searchMentor').should('be.visible').type('Anya Forger');
    cy.get(':nth-child(4) > .mt-4').should('contain', 'Anya Forger');
  });

  it('should show no results message for unmatched keyword', () => {
    cy.get('#searchMentor').should('be.visible').type('Dzakwan DH');
    cy.contains('Tidak ada hasil pencarian ditemukan').should('be.visible');
  });
  
  it('should filter mentors by experience level', () => {
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click();
    cy.contains('Officer').click();
  
    cy.get('body').then(($body) => {
      if ($body.text().includes('Mentor yang terkait dengan filter yang dipilih belum ada')) {
        cy.contains('Mentor yang terkait dengan filter yang dipilih belum ada').should('be.visible');
        cy.get('.mt-6').click();
      } else {
        cy.url().should('include', '/mentoring?mLevels=63f440c587de93c936594f55');
        cy.contains('Associate / Officer').should('be.visible');
      }
    });
  });

});