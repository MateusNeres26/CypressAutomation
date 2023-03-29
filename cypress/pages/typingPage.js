class typingPage {

    pendenteDigitacao() {
        cy.get('.icon_menu_register_office').click();
        cy.get(':nth-child(2) > .pt-2').click();
    }

    pendenteRevisao() {
        cy.get('.icon_menu_register_office').click();
        cy.get(':nth-child(3) > .pt-2').click();
    }

    pendenteEmExigencia() {
        cy.get('.icon_menu_register_office').click();
        cy.get(':nth-child(4) > .pt-2').click();
    }

    validaColunas() {

        const ColumnTexts = [
            "Identificador",
        ]
        ColumnTexts.forEach((columnText) => {
            cy.contains(columnText).click();
            cy.title().should('eq', 'Empresa | Digitação e-Protocolos');
        });
        cy.xpath("//thead/tr[1]/th[3]/div[1]/div[1]").click({force: true});
        cy.title().should('eq', 'Empresa | Digitação e-Protocolos');
        cy.xpath("//thead/tr[1]/th[4]/div[1]/div[1]").click({force: true});
        cy.title().should('eq', 'Empresa | Digitação e-Protocolos');
    }

    ValidaFiltros() {
        const FiltersTexts = [
            //Identificador
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#input-filter-identifier',
                search: '#search-by-identifier-field > .header-search', text: "Teste Regressivo"
            },
            //Nº Solicitação
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#input-filter-protocol',
                search: '#search-by-protocol-field > .header-search', text: "Teste Regressivo"
            },
            //Cartório
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', input: '#input-filter-registryOffice-name',
                search: '#search-by-registryOffice-name-field > .header-search', text: "Teste Regressivo"
            },
        ]
        FiltersTexts.forEach((filtertext) => {
            cy.xpath(filtertext.id).click({force:true});
            cy.get(filtertext.input).type(filtertext.text, {force:true});
            cy.get(filtertext.search).click({force:true});
            cy.title().should('eq', 'Empresa | Digitação e-Protocolos');
        });
        cy.get('#btn-clear-filter').click();
        cy.title().should('eq', 'Empresa | Digitação e-Protocolos');
    }
}

module.exports = new typingPage();