class configPage {

    //MENU DE USUÁRIOS
    usuarios() {
        cy.get('.icon_menu_settings').click();
        cy.get('.settings > :nth-child(2) > a').click();
    }

    //verificação de filtros e colunas

    validaColunas() {

        const ColumnTexts = [
            "Nome",
            "E-mail",
            "CPF/CNPJ:",
            "Status",
        ]
        ColumnTexts.forEach((columnText) => {
            cy.contains(columnText).click({ force: true });
            cy.title().should('eq', 'Gerenciar Contas');
        });
    }

    validaFiltros() {
        const userFiltersTexts = [
            //Npme
            {
                id: '//thead/tr[1]/th[1]/div[1]/div[2]', input: '#full-name-input',
                search: '#search-by-full-name-field > .header-search', text: "Pagamento"
            },
            //E-mail
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#email-input',
                search: '#search-by-email-field > .header-search', text: "teste@teste.com"
            },
            //CPF/CNPJ
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#document-number-input',
                search: '#search-by-document-number-field > .header-search', text: "123456789"
            },

        ]
        userFiltersTexts.forEach((filtertext) => {
            cy.xpath(filtertext.id).click({ force: true });
            cy.get(filtertext.input).type(filtertext.text, { force: true });
            cy.get(filtertext.search).click({ force: true });
            cy.title().should('eq', 'Gerenciar Contas');

        });
        cy.get('#btn-clear-filter').click();
        cy.title().should('eq', 'Gerenciar Contas');
    }

    //Adicionar usuário

    formUserAdd(){
        cy.xpath("//button[contains(text(),'Adicionar')]").click();
    }

    // Valida obrigatoriedade Campos
    sendNull(){
        cy.xpath("//button[contains(text(),'Salvar')]").click({force:true});
    }

    validaMsgErroUsuario(){
        cy.get('.section_configutation_bottom_bar > .btn_color_main_action')
        .invoke('removeAttr', 'disabled') 
        .click({force:true});

        const expectedMessage = "Campo obrigatório!"
        const expectedMessage1 = "Campo obrigatório!\nTelefone fixo ou móvel deve ser informado."
        const expectedMessage2 = "Selecione os direitos de acesso do usuário."

        cy.get('#full-name-error-span').should('have.text', expectedMessage);
        cy.get('#login-error-span').should('have.text', expectedMessage);
        cy.get('#email-error-span').should('have.text', expectedMessage);
        cy.get('#phone-number-error-span').should('have.text', expectedMessage1);
        cy.get('#cellphone-number-error-span').should('have.text', expectedMessage1);
        cy.get('#user-groups-error-span').should('have.text', expectedMessage2);
    }


    createUser(){
        cy.get('#input-document-number').type(Cypress.env('cpf'));
        cy.get('#input-part-name').type(Cypress.env('name'));
        cy.get('#input-login').type(Cypress.env('name'));
        cy.get('#input-email').type(Cypress.env('email'));
        cy.get('#input-phone-number').type('1111111111');
        cy.get('#input-cellphone-number').type('11111111112');
        cy.get('[value="376"]').click();
        cy.get('[value="69"]').click();

    }

}


module.exports = new configPage;