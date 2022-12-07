describe('checking DND for ingredients into constructor and order',  () => {
    const baseUrl = Cypress.config('baseUrl');
    before( () => {
        cy.visit(`${baseUrl}`);
    })
    const constructor_block = '[class^=BurgerConstructor_constructor_block]';
    it('drag the ingredient and drop it into the constructor',  () => {
        cy.get(constructor_block)
            .contains('Флюоресцентная булка')
            .should('not.exist');

        cy.contains('Флюоресцентная булка').trigger('dragstart');
        cy.get(constructor_block).trigger('drop');

        cy.get(constructor_block)
            .contains('Флюоресцентная булка')
            .should('exist');

        cy.get(constructor_block)
            .contains('Соус фирменный Space Sauce')
            .should('not.exist');

        cy.contains('Соус фирменный Space Sauce').trigger('dragstart');
        cy.get(constructor_block).trigger('drop');

        cy.get(constructor_block)
            .contains('Соус фирменный Space Sauce')
            .should('exist');
    })
    it('trying to order anon user, get to login page',  () =>{

        cy.contains('Оформить заказ').click();

        cy.url().should('eq', `${baseUrl}/login`);
    })

    it('pass auth and order',  () => {
        cy.get('input[name="email"]').type('test123321@mail.ru');
        cy.contains('Пароль').type('test123321');
        cy.get('button').contains('Войти').click();
        cy.url().should('eq', `${baseUrl}/`);
        cy.get('[class^=button_button]').contains('Оформить заказ').click();
        cy.get('[class^=Modal]', {timeout: 30000 }).as('modal').should('exist');
        cy.get('@modal').contains('Ваш заказ начали готовить');
        cy.get('@modal').contains('Дождитесь готовности на орбитальной станции');
    })
});
