
class RcdePage {

    RcdeFilters() {

        const RCDEFilterTexts = [
            //N SOLICITACAO
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#rcde-protocolNumberCRI-input',
                search: "#search-by-protocolNumberCRI-field > .header-search", text: "2022", isSelect: false
            },
            //N OPERAÇÃO
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#input-filter-operationNumber',
                search: '#search-by-operationNumber-field > .header-search', text: "01092022", isSelect: false
            },
            //Tipo de Documento
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', btn: "//thead/tr[1]/th[4]/div[2]/span[1]/div[1]/button[1]/span[1]",
                select: "//thead/tr[1]/th[4]/div[2]/span[1]/div[1]/div[1]/button[2]/span[1]/input[1]", search: "//thead/tr[1]/th[4]/div[2]/span[1]/div[1]/div[1]/div[1]/a[1]", isSelect: true
            },
            // Data de Emissão
            { id: '//thead/tr[1]/th[5]/div[1]/div[2]', input: '#documentIssueDate-date-range-input', text: "24/08/2022 - 24/08/2022", search: "//thead/tr[1]/th[5]/div[2]/a[1]", data: true },
            //Data de Envio para Central
            { id: '//thead/tr[1]/th[6]/div[1]/div[2]', input: '#sentToCentralDate-date-range-input', text: "01/09/2022 - 01/09/2022", search: "//thead/tr[1]/th[6]/div[2]/a[1]", data: true },
            //Status
            {
                id: '//thead/tr[1]/th[7]/div[1]/div[2]', btn: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/button[1]/span[1]",
                select: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/div[1]/button[5]/span[1]/input[1]", search: "//thead/tr[1]/th[7]/div[2]/span[1]/div[1]/div[1]/div[1]/a[1]", isSelect: true
            },
            //SPE
            {
                id: '//thead/tr[1]/th[8]/div[1]/div[2]', input: '#input-filter-specialPurposeEntity-name',
                search: '#search-by-specialPurposeEntity-name-field > .header-search', text: "Pagamento Automatico", isSelect: false
            },
        ]

        RCDEFilterTexts.forEach((filtertext) => {

            if (filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.xpath(filtertext.btn).click({ force: true });
                cy.xpath(filtertext.select).click({ force: true });
                cy.xpath(filtertext.search).click({ force: true });
                cy.title().should('eq', 'Empresa | RCDEs');

            } else if (filtertext.data) {
                //logica data
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).clear().type(filtertext.text);
                cy.xpath(filtertext.search).click();
                cy.title().should('eq', 'Empresa | RCDEs');

            } else if (!filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).type(filtertext.text);
                cy.get(filtertext.search).click();
                cy.title().should('eq', 'Empresa | RCDEs');
            }
        });

    }


    RcdeColum(){
        const RCDEColumnTexts = [
            "Nº Solicitação",
            "Nº Operação",
            "Tipo de Documento",
            "Data da Emissão",
            "Data de envio para Central",
            "Status",
            
    
        ]
    
        RCDEColumnTexts.forEach((columnText) => {
    
            cy.contains(columnText).click();
            cy.title().should('eq', 'Empresa | RCDEs');
    
    
        });
        cy.xpath("//thead/tr[1]/th[8]/div[1]/div[1]").click()//SPE
        cy.title().should('eq', 'Empresa | RCDEs');
    }


}
module.exports = new RcdePage();