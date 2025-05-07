import './commands'
beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');
});

afterEach(() => {
    cy.wait(5000);
    cy.get('.ant-btn > .relative').click();
    cy.get('.rounded-b-md > .ant-dropdown-menu-title-content').contains('Keluar').click();
});