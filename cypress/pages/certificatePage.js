
class CertificatePage {

    CertificateFilters() {

        const CertificateFilterTexts = [
            //N SOLICITACAO
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#certificate-request-protocolNumberCRI-input',
                search: "#search-by-protocolNumberCRI-field > .header-search", text: "1249913", isSelect: false
            },
            //IDENTIFICADOR
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#input-filter-identifier',
                search: '#search-by-identifier-field > .header-search', text: "Teste Regressivo", isSelect: false
            },
            //USUÀRIO
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', input: '#input-filter-user-fullName',
                search: '#search-by-user-fullName-field > .header-search', text: "Mateus", isSelect: false
            },
            //n operação
            {
                id: '//thead/tr[1]/th[5]/div[1]/div[2]', input: '#input-filter-operationNumber',
                search: '#search-by-operationNumber-field > .header-search', text: "1", isSelect: false
            },
            //cartório
            {
                id: '//thead/tr[1]/th[6]/div[1]/div[2]', input: '#certificate-request-registry-office-input',
                search: '#search-by-registry-office-field > .header-search', text: "1", isSelect: false
            },
            //data criação

            { id: '//thead/tr[1]/th[7]/div[1]/div[2]', input: '#creationDate-date-range-input', text: "13/10/2022 - 13/10/2022",
             search: "//thead/tr[1]/th[7]/div[2]/a[1]", data: true },
             //data envio
            { id: '//thead/tr[1]/th[8]/div[1]/div[2]', input: '#sentToCentralDate-date-range-input', text: "13/10/2022 - 13/10/2022",
             search: "//thead/tr[1]/th[8]/div[2]/a[1]", data: true },

            
            {
                id: '//thead/tr[1]/th[9]/div[1]/div[2]', btn: "//thead/tr[1]/th[9]/div[2]/span[1]/div[1]/button[1]",
                select: "//thead/tr[1]/th[9]/div[2]/span[1]/div[1]/div[1]/button[5]/span[1]/input[1]", search: "//thead/tr[1]/th[9]/div[2]/span[1]/div[1]/div[1]/div[1]/a[1]", isSelect: true
            },
            //STATUS
            {
                id: '//thead/tr[1]/th[10]/div[1]/div[2]', btn: "//div[@id='search-by-type-field']",
                select: "//thead/tr[1]/th[10]/div[2]/span[1]/div[1]/div[1]/button[3]/span[1]/input[1]", search: "//thead/tr[1]/th[10]/div[2]/a[1]", isSelect: true
            },
            //SPE
            {
                id: '//thead/tr[1]/th[11]/div[1]/div[2]', input: '#dossier-specialPurposeEntity-input',
                search: '#search-by-specialPurposeEntity-field > .header-search', text: "1", isSelect: false
            },
            //ESTADO
            {
                id: '//thead/tr[1]/th[12]/div[1]/div[2]', btn: "//thead/tr[1]/th[12]/div[2]/span[1]/div[1]/button[1]/span[1]",
                select: "//thead/tr[1]/th[12]/div[2]/span[1]/div[1]/div[1]/button[14]/span[1]/input[1]", search: "//thead/tr[1]/th[12]/div[2]/a[1]", isSelect: true
            },
       
        ]

        CertificateFilterTexts.forEach((filtertext) => {

            if (filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.xpath(filtertext.btn).click({ force: true }, {multiple: true});
                cy.xpath(filtertext.select).click({ force: true },{multiple: true});
                cy.xpath(filtertext.search).click({ force: true });
                cy.title().should('eq', 'Empresa | Pedidos de Certidão');

            } else if (filtertext.data) {
                //logica data
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).clear().type(filtertext.text);
                cy.xpath(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Pedidos de Certidão');

            } else if (!filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).type(filtertext.text);
                cy.get(filtertext.search).click();
                cy.title().should('eq', 'Empresa | Pedidos de Certidão');
            }
        });

    }


    CertificateColum(){
        const CertificateColumnTexts = [
            "Nº Solicitação",
            "Identificador",
            "Nº Operação",
            "Cartório",
            "Data de Criação",
            "Data de envio para Central",
            "Tipo de Certidão",
            "Status",
            "Estado",
    
        ]
    
        CertificateColumnTexts.forEach((columnText) => {
    
            cy.contains(columnText).click({force: true});
            cy.title().should('eq', 'Empresa | Pedidos de Certidão');
    
        });
        cy.xpath('//thead/tr[1]/th[11]/div[1]/div[1]').click();
        cy.xpath('//thead/tr[1]/th[4]/div[1]/div[1]').click();
        cy.title().should('eq', 'Empresa | Pedidos de Certidão');
    }


}
module.exports = new CertificatePage();