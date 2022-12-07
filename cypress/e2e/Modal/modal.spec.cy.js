describe('ingredient modal test, on open/close event', function () {
    const baseUrl = Cypress.config('baseUrl');
    before(function () {
        cy.visit(`${baseUrl}`);
    });

    it('opening modal of ingredient', function () {
        cy.contains('Флюоресцентная булка').click();
        cy.get('[class^=Modal]').as('modal');
        cy.get('@modal').contains('Детали ингредиента');
        cy.get('@modal').contains('Калории, ккал');
        cy.get('@modal').contains('Жиры, г');
    });

    it('close the modal', function () {
        cy.get('[class^=Modal_closeIcon]').click();
        cy.get('[class^=Modal_closeIcon]').should('not.exist');
    });
});
