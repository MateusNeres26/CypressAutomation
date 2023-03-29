class financePage {

    acompanhamentoDeCredito() {
        cy.get('.icon_menu_financial').click();
        cy.get('.financial > :nth-child(2) > a').click();
    }
    boletosGerados() {
        cy.get('.icon_menu_financial').click();
        cy.get('.financial > :nth-child(3) > a').click();
    }
    carrinhoDeCompras() {
        cy.get('.icon_menu_financial').click();
        cy.get('.financial > :nth-child(4) > a').click();
    }
    faturas() {
        cy.get('.icon_menu_financial').click();
        cy.get('.financial > :nth-child(5) > a').click();
    }
    movimentacoes() {
        cy.get('.icon_menu_financial').click();
        cy.get('.financial > :nth-child(7) > a').click();
    }
    gerenciamentoSaldos() {
        cy.get('.icon_menu_financial').click();
        cy.get('#submenutitle').click();
        cy.get('#submenu > :nth-child(1) > a').click();
    }
    gerenciamentoTxFaturar() {
        cy.get('.icon_menu_financial').click();
        cy.get('#submenutitle').click();
        cy.get('#submenu > :nth-child(2) > a').click();
    }
    gerenciamentoMovCrédito() {
        cy.get('.icon_menu_financial').click();
        cy.get('#submenutitle').click();
        cy.get('#submenu > :nth-child(3) > a').click();
    }
    gerenciamentoExtrato() {
        cy.get('.icon_menu_financial').click();
        cy.get('#submenutitle').click();
        cy.get('#submenu > :nth-child(4) > a').click();
    }


    validaColunaAcompCrédito() {

        const financeColumnTexts = [
            "Data",
            "Descrição",
            "Valor",
            "Associação",
        ]

        financeColumnTexts.forEach((columnText) => {
            cy.contains(columnText).click({ force: true });
            cy.title().should('eq', 'Empresa | Créditos');

        });
        cy.get('#search-by-billing-specialPurposeEntity-name-column > .order_selection').click({force: true});
        cy.title().should('eq', 'Empresa | Créditos');

    }

    validaColunasBoletosGerados() {

        const billetColumnTexts = [
            "Nº Boleto",
            "Número da fatura",
            "Emissão",
            "Vencimento",
            "Status",
            "Tipo de Boleto",
            "Valor",
            "Identificador",
            "Última",
        ]

        billetColumnTexts.forEach((columnText) => {
            cy.contains(columnText).click({ force: true });
            cy.title().should('eq', 'Empresa | Boletos Gerados');

        });
        cy.xpath("//thead/tr[1]/th[8]/div[1]/div[1]").click();
        cy.title().should('eq', 'Empresa | Boletos Gerados');

    }

    validaColunasCarinhoDeCompras() {

        const shoppingColumnTexts = [
            "Item(s)",
            "Tipo da Custa",
            "Associação",
        ]

        shoppingColumnTexts.forEach((columnText) => {
            cy.contains(columnText).click({ force: true });
            cy.title().should('eq', 'Carrinho de Compras');

        });
        //Fora do ForEach pois é direcionado para outra página//
        cy.xpath("//thead/tr[1]/th[5]/div[1]/div[1]").click();//USUARIO
        cy.title().should('eq', 'Carrinho de Compras');
        cy.xpath("//thead/tr[1]/th[4]/div[1]/div[1]").click();//SPE
        cy.title().should('eq', 'Carrinho de Compras');
    }

    validaColunasFaturas() {

        const faturasColumnTexts = [
            "Número da Fatura",
            "Data de Emissão",
            "Data de Vencimento",
            "Status",
            "Tipo",
            "Forma de Pagamento",
            "Associação",
            "Valor",
        ]

        faturasColumnTexts.forEach((columnText) => {
            cy.contains(columnText).click({ force: true });
            cy.title().should('eq', 'Empresa | Faturas');

        });
        //Fora do ForEach pois é direcionado para outra página//
        cy.xpath("//thead/tr[1]/th[8]/div[1]/div[1]").click();//SPE
        cy.title().should('eq', 'Empresa | Faturas');
    }

    validaColunasMovimentacoes() {

        const billetColumnTexts = [
            "Nº Solicitação",
            "Identificador",
            "Descrição",
            "Número da Fatura",
            "Data de Consolidação",
            "Data de Vencimento",
            "Serviço",
            "Cartório Responsável",
            "Tipo de Custa",
            "Status",
            "Forma de Pagamento",
            "Nº Operação",
            "Valor",
            "Última",
        ]

        billetColumnTexts.forEach((columnText) => {
            cy.contains(columnText).click({ force: true });
            cy.title().should('eq', 'Empresa | Movimentações');

        });
        //abaix, os cliques estão direcionando para outra página
        cy.xpath("//thead/tr[1]/th[9]/div[1]/div[1]").click();//usuario
        cy.title().should('eq', 'Empresa | Movimentações');
        cy.xpath("//thead/tr[1]/th[10]/div[1]/div[1]").click();//setor
        cy.title().should('eq', 'Empresa | Movimentações');
        cy.xpath("//thead/tr[1]/th[14]/div[1]/div[1]").click();//SPE
        cy.title().should('eq', 'Empresa | Movimentações');

    }

    validaFiltroAcompCrédito() {

        const finaceFilterTexts = [
            //Data
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#date-date-range-input',
                text: "01/01/2023 - 01/01/2023", search: "//thead/tr[1]/th[2]/div[2]/a[1]", data: true
            },

            //Descrição
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#input-filter-description',
                search: '#search-by-description-field > .header-search', text: "Adição de Créditos", isSelect: false
            },
            //Valor
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', input: '#input-filter-value',
                search: '#search-by-value-field > .header-search', text: "7.79", isSelect: false
            },
            //SPE
            {
                id: '//thead/tr[1]/th[5]/div[1]/div[2]', input: '#input-filter-billing-specialPurposeEntity-name',
                search: '#search-by-billing-specialPurposeEntity-name-field > .header-search', text: "Pagamento Automático", isSelect: false
            },
            //Associação
            {
                id: '//thead/tr[1]/th[5]/div[1]/div[2]', btn: "//thead/tr[1]/th[6]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[6]/div[2]/span[1]/div[1]/div[1]/button[2]/span[1]/input[1]", search: "//thead/tr[1]/th[6]/div[2]/a[1]", isSelect: true
            },
        ]
        finaceFilterTexts.forEach((filtertext) => {

            if (filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.xpath(filtertext.btn).click({ force: true });
                cy.xpath(filtertext.select).click({ force: true });
                cy.xpath(filtertext.search).click({ force: true });
                cy.title().should('eq', 'Empresa | Créditos');

            } else if (filtertext.data) {
                //logica data
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).clear().type(filtertext.text);
                cy.xpath(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Créditos');

            } else if (!filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).type(filtertext.text);
                cy.get(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Créditos');
            }
        });
        cy.xpath("//a[@id='btn-clear-filter']").click();
        cy.title().should('eq', 'Empresa | Créditos');
    }
    validaFiltroBoletosGerados() {

        const billetFilterTexts = [
            //N Boleto
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#input-filter-idNumber',
                search: '#search-by-idNumber-field > .header-search', text: "0", isSelect: false
            },
            //N Fatura
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#input-filter-billing-identifier',
                search: '#search-by-billing-identifier-field > .header-search', text: "2022", isSelect: false
            },
            //Data Emissão
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', input: '#issueDate-date-range-input',
                text: "01/01/2023 - 01/01/2023", search: "//thead/tr[1]/th[4]/div[2]/a[1]", data: true
            },
            //Data vencimento
            {
                id: '//thead/tr[1]/th[5]/div[1]/div[2]', input: '#dueDate-date-range-input',
                text: "01/01/2023 - 01/01/2023", search: "//thead/tr[1]/th[5]/div[2]/a[1]", data: true
            },
            //Status
            {
                id: '//thead/tr[1]/th[6]/div[1]/div[2]', btn: "//thead/tr[1]/th[6]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[6]/div[2]/span[1]/div[1]/div[1]/button[3]/span[1]/input[1]", search: "//thead/tr[1]/th[6]/div[2]/a[1]", isSelect: true
            },
            //Tipo de Boleto
            {
                id: '//thead/tr[1]/th[7]/div[1]/div[2]', btn: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/div[1]/button[2]/span[1]/input[1]", search: "//thead/tr[1]/th[7]/div[2]/a[1]", isSelect: true
            },
            //SPE
            {
                id: '//thead/tr[1]/th[8]/div[1]/div[2]', input: '#input-filter-billing-specialPurposeEntity-name',
                search: '#search-by-billing-specialPurposeEntity-name-field > .header-search', text: "Pagamento Automático", isSelect: false
            },
            //Valor
            {
                id: '//thead/tr[1]/th[9]/div[1]/div[2]', input: '#input-filter-billing-value',
                search: '#search-by-billing-value-field > .header-search', text: "7,79", isSelect: false
            },
            //Identificador
            {
                id: '//thead/tr[1]/th[10]/div[1]/div[2]', input: '#input-filter-identifiers',
                search: "#search-by-identifiers-field > .header-search", text:"Teste regressivo", isSelect: false
            },
        ]
        billetFilterTexts.forEach((filtertext) => {

            if (filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.xpath(filtertext.btn).click({ force: true });
                cy.xpath(filtertext.select).click({ force: true });
                cy.xpath(filtertext.search).click({ force: true });
                cy.title().should('eq', 'Empresa | Boletos Gerados');

            } else if (filtertext.data) {
                //logica data
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).clear().type(filtertext.text);
                cy.xpath(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Boletos Gerados');

            } else if (!filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).type(filtertext.text);
                cy.get(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Boletos Gerados');
            }
        });
        cy.xpath("//a[@id='btn-clear-filter']").click();
        cy.title().should('eq', 'Empresa | Boletos Gerados');
    }

    validaFiltroCarrinhoDeCompras() {

        const shoppingFilterTexts = [
            //Items
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#input-filter-orderDescription',
                search: '#search-by-orderDescription-field > .header-search', text: "Ma", isSelect: false
            },

            //Tipo da Custa
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', btn: "//thead/tr[1]/th[3]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[3]/div[2]/span[1]/div[1]/div[1]/button[2]/span[1]/input[1]", search: "//thead/tr[1]/th[3]/div[2]/a[1]", isSelect: true
            },
            //Usuário
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', input: '#input-filter-cart-user-fullName',
                search: '#search-by-cart-user-fullName-field > .header-search', text: "Mateus", isSelect: false
            },
            //SPE
            {
                id: '//thead/tr[1]/th[5]/div[1]/div[2]', input: '#input-filter-specialPurposeEntity-name',
                search: '#search-by-specialPurposeEntity-name-field > .header-search', text: "Pagamento", isSelect: false
            },
            //Associação
            {
                id: '//thead/tr[1]/th[6]/div[1]/div[2]', btn: "//thead/tr[1]/th[6]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[6]/div[2]/span[1]/div[1]/div[1]/button[1]/span[1]/input[1]", search: "//thead/tr[1]/th[6]/div[2]/a[1]", isSelect: true
            },

        ]
        shoppingFilterTexts.forEach((filtertext) => {

            if (filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.xpath(filtertext.btn).click({ force: true });
                cy.xpath(filtertext.select).click({ force: true });
                cy.xpath(filtertext.search).click({ force: true });
                cy.title().should('eq', 'Carrinho de Compras');

            } else if (filtertext.data) {
                //logica data
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).clear().type(filtertext.text);
                cy.xpath(filtertext.search).click();
                cy.title().should('eq', 'Carrinho de Compras');

            } else if (!filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).type(filtertext.text,{force: true});
                cy.get(filtertext.search).click();
                cy.title().should('eq', 'Carrinho de Compras');
            }
        });
    }

    comprarCréditosCRI() {
        cy.xpath("//button[contains(text(),'Comprar créditos')]").click();
        cy.xpath("//input[@id='must-be-authenticated-radio-no']").click();
        cy.xpath("//body/div[@id='child-popup-div']/div[1]/form[1]/div[1]/div[1]/div[2]/input[1]").type('1000');//10 reais
        cy.xpath("//button[contains(text(),'Pagar com boleto')]").click();
    }

    comprarCréditosSaec() {
        cy.xpath("//button[contains(text(),'Comprar créditos')]").click();
        cy.xpath("//input[@id='must-be-authenticated-radio-yes']").click();
        cy.xpath("//body/div[@id='child-popup-div']/div[1]/form[1]/div[1]/div[1]/div[2]/input[1]").type('1000');//10 reais
        cy.xpath("//button[contains(text(),'Pagar com boleto')]").click();
    }
    validaGeraçãoBoleto() {
        cy.xpath("//label[contains(text(),'Dados para pagamento')]").should('be.visible');
    }


    validaFiltroFaturas() {

        const faturasFilterTexts = [
            //N Fatura
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#input-filter-identifier',
                search: '#search-by-identifier-field > .header-search', text: "2022", isSelect: false
            },
            //Data Emissão
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#issueDate-date-range-input',
                text: "01/01/2023 - 01/01/2023", search: "//thead/tr[1]/th[3]/div[2]/a[1]", data: true
            },
            //Data vencimento
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', input: '#dueDate-date-range-input',
                text: "01/01/2023 - 01/01/2023", search: "//thead/tr[1]/th[4]/div[2]/a[1]", data: true
            },
            //Status
            {
                id: '//thead/tr[1]/th[5]/div[1]/div[2]', btn: "//thead/tr[1]/th[5]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[5]/div[2]/span[1]/div[1]/div[1]/button[1]/span[1]/input[1]", search: "//thead/tr[1]/th[5]/div[2]/a[1]", isSelect: true
            },
            //Tipo de Boleto
            {
                id: '//thead/tr[1]/th[6]/div[1]/div[2]', btn: "//thead/tr[1]/th[6]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[6]/div[2]/span[1]/div[1]/div[1]/button[2]/span[1]/input[1]", search: "//thead/tr[1]/th[6]/div[2]/a[1]", isSelect: true
            },
            //Forma de Pagamento
            {
                id: '//thead/tr[1]/th[7]/div[1]/div[2]', btn: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/div[1]/button[3]/span[1]/input[1]", search: "//thead/tr[1]/th[7]/div[2]/a[1]", isSelect: true
            },
            //SPE
            {
                id: '//thead/tr[1]/th[8]/div[1]/div[2]', input: '#input-filter-specialPurposeEntity-name',
                search: '#search-by-specialPurposeEntity-name-field > .header-search', text: "Pagamento Automático", isSelect: false
            },
            //Associação
            {
                id: '//thead/tr[1]/th[9]/div[1]/div[2]', btn: "//thead/tr[1]/th[9]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[9]/div[2]/span[1]/div[1]/div[1]/button[1]/span[1]/input[1]", search: "//thead/tr[1]/th[9]/div[2]/a[1]", isSelect: true
            },
            //Valor
            {
                id: '//thead/tr[1]/th[10]/div[1]/div[2]', input: '#input-filter-value',
                search: '#search-by-value-field > .header-search', text: "7,79", isSelect: false
            },
        ]
        faturasFilterTexts.forEach((filtertext) => {

            if (filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.xpath(filtertext.btn).click({ force: true });
                cy.xpath(filtertext.select).click({ force: true });
                cy.xpath(filtertext.search).click({ force: true });
                cy.title().should('eq', 'Empresa | Faturas');

            } else if (filtertext.data) {
                //logica data
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).clear().type(filtertext.text);
                cy.xpath(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Faturas');

            } else if (!filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).type(filtertext.text, {force:true});
                cy.get(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Faturas');
            }
        });
        cy.xpath("//a[@id='btn-clear-filter']").click();
        cy.title().should('eq', 'Empresa | Faturas');
    }


    validaFiltroMovimentacoes() {

        const movimentacoesFilterTexts = [
            //N Solicitação
            {
                id: '//thead/tr[1]/th[1]/div[1]/div[2]', input: '#criNumber-input',
                search: '#search-by-criNumber-field > .header-search', text: "0", isSelect: false
            },
            //Identificador
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#identifier-input',
                search: '#search-by-identifier-field > .header-search', text: "Teste Regressivo", isSelect: false
            },
            //Descrição
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#description-input',
                search: '#search-by-description-field > .header-search', text: "Estorno", isSelect: false
            },
            //Numero Fatura
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', input: '#billing-identifier-input',
                search: '#search-by-billing-identifier-field > .header-search', text: "2022", isSelect: false
            },
            //Data Consolidação
            {
                id: '//thead/tr[1]/th[5]/div[1]/div[2]', input: '#consolidationDate-date-range-input',
                text: "01/01/2023 - 01/01/2023", search: "//thead/tr[1]/th[5]/div[2]/a[1]", data: true
            },
            //Data vencimento
            {
                id: '//thead/tr[1]/th[6]/div[1]/div[2]', input: '#billing-dueDate-date-range-input',
                text: "01/01/2023 - 01/01/2023", search: "//thead/tr[1]/th[6]/div[2]/a[1]", data: true
            },
            //Serviço
            {
                id: '//thead/tr[1]/th[7]/div[1]/div[2]', btn: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/div[1]/button[16]/span[1]/input[1]", search: "//thead/tr[1]/th[7]/div[2]/a[1]", isSelect: true
            },
            //Cartório Responsável
            {
                id: '//thead/tr[1]/th[8]/div[1]/div[2]', input: '#registry-office-input',
                search: '#search-by-registry-office-field > .header-search', text: "2022", isSelect: false
            },
            //Usuário
            {
                id: '//thead/tr[1]/th[9]/div[1]/div[2]', input: '#user-input',
                search: '#search-by-user-field > .header-search', text: "Administrador", isSelect: false
            },
            //Setor
            {
                id: '//thead/tr[1]/th[10]/div[1]/div[2]', input: '#sector-input',
                search: '#search-by-sector-field > .header-search', text: "2022", isSelect: false
            },
            //Tipo de Custa
            {
                id: '//thead/tr[1]/th[11]/div[1]/div[2]', btn: "//thead/tr[1]/th[11]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[11]/div[2]/span[1]/div[1]/div[1]/button[2]/span[1]/input[1]",
                search: "//thead/tr[1]/th[11]/div[2]/a[1]", isSelect: true
            },
            //Status
            {
                id: '//thead/tr[1]/th[12]/div[1]/div[2]', btn: "//thead/tr[1]/th[12]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[12]/div[2]/span[1]/div[1]/div[1]/button[1]/span[1]/input[1]", 
                search: "//thead/tr[1]/th[12]/div[2]/a[1]", isSelect: true
            },
            //Forma de Pagamento
            {
                id: '//thead/tr[1]/th[13]/div[1]/div[2]', btn: "//thead/tr[1]/th[13]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[13]/div[2]/span[1]/div[1]/div[1]/button[3]/span[1]/input[1]", 
                search: "//thead/tr[1]/th[13]/div[2]/a[1]", isSelect: true
            },
            //SPE
            {
                id: '//thead/tr[1]/th[14]/div[1]/div[2]', input: '#input-filter-orderItem-order-specialPurposeEntity-name',
                search: '#search-by-orderItem-order-specialPurposeEntity-name-field > .header-search', 
                text: "Pagamento Automático", isSelect: false
            },
            //N Operação
            {
                id: '//thead/tr[1]/th[15]/div[1]/div[2]', input: '#input-filter-orderItem-operationNumber',
                search: '#search-by-orderItem-operationNumber-field > .header-search', text: "Teste", isSelect: false
            },
            //Valor
            {
                id: '//thead/tr[1]/th[16]/div[1]/div[2]', input: '#input-filter-value',
                search: "#search-by-value-field > .header-search", text:"7,79", isSelect: false
            },
        ]
        movimentacoesFilterTexts.forEach((filtertext) => {

            if (filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.xpath(filtertext.btn).click({ force: true });
                cy.xpath(filtertext.select).click({ force: true });
                cy.xpath(filtertext.search).click({ force: true });
                cy.title().should('eq', 'Empresa | Movimentações');

            } else if (filtertext.data) {
                //logica data
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).clear().type(filtertext.text);
                cy.xpath(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Movimentações');

            } else if (!filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).type(filtertext.text,{force: true});
                cy.get(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Movimentações');
            }
        });
        cy.xpath("//button[@id='btn-clear-filter']").click();
        cy.title().should('eq', 'Empresa | Movimentações');
    }



    validaTelaGerenciamento(){
        cy.title('eq', 'Empresa | Gerenciamento');
    }




}

module.exports = new financePage();