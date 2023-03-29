import { generate } from 'gerador-validador-cpf'
var faker = require('faker');
var firstname = faker.name.firstName();
var lastname = faker.name.lastName();
var email = faker.internet.email(firstname);

class DossierPage {

    DossierFilters() {

        const DossierFilterTexts = [
            //N SOLICITACAO
            {
                id: '//thead/tr[1]/th[2]/div[1]/div[2]', input: '#dossier-protocol-input',
                search: "#search-by-protocol-field > .header-search > i > svg", text: "1249913", isSelect: false
            },
            //IDENTIFICADOR
            {
                id: '//thead/tr[1]/th[3]/div[1]/div[2]', input: '#dossier-identifer-input',
                search: '#search-by-identifier-field > .header-search', text: "Teste Regressivo", isSelect: false
            },
            //USUARIO
            {
                id: '//thead/tr[1]/th[4]/div[1]/div[2]', input: '#input-filter-user-fullName',
                search: '#search-by-user-fullName-field > .header-search', text: "Mateus", isSelect: false
            },
            {
                id: '//thead/tr[1]/th[5]/div[1]/div[2]', input: '#input-filter-prenotation',
                search: '#search-by-prenotation-field > .header-search', text: "1", isSelect: false
            },
            {
                id: '//thead/tr[1]/th[6]/div[1]/div[2]', input: '#input-filter-operationNumber',
                search: '#search-by-operationNumber-field > .header-search', text: "1", isSelect: false
            },
            {
                id: '//thead/tr[1]/th[9]/div[1]/div[2]', input: '#dossier-registry-office-input',
                search: '#search-by-registry-office-field > .header-search > i > svg', text: "OFICIAL DE REGISTRO", isSelect: false
            },

            { id: '//thead/tr[1]/th[10]/div[1]/div[2]', input: '#lastUpdate-date-range-input', text: "13/10/2022 - 13/10/2022", search: "//thead/tr[1]/th[10]/div[2]/a[1]", data: true },
            { id: '//thead/tr[1]/th[11]/div[1]/div[2]', input: '#sentToCentralDate-date-range-input', text: "13/10/2022 - 13/10/2022", search: "//thead/tr[1]/th[11]/div[2]/a[1]", data: true },
            { id: '//thead/tr[1]/th[12]/div[1]/div[2]', input: '#prenotationExpireDate-date-range-input', text: " ", search: "//thead/tr[1]/th[12]/div[2]/a[1]", data: true },
            
            {
                id: '//thead/tr[1]/th[13]/div[1]/div[2]', btn: "//thead/tr[1]/th[13]/div[2]/span[1]/div[1]/button[1]/span[1]",
                select: "//thead/tr[1]/th[13]/div[2]/span[1]/div[1]/div[1]/button[5]/span[1]/input[1]", search: "//thead/tr[1]/th[13]/div[2]/span[1]/div[1]/div[1]/div[1]/a[1]", isSelect: true
            },
            //SPE
            {
                id: '//thead/tr[1]/th[14]/div[1]/div[2]', input: '#input-filter-specialPurposeEntity-name',
                search: '#search-by-specialPurposeEntity-name-field > .header-search', text: "1", isSelect: false
            },
            //Estado
            {
                id: '//thead/tr[1]/th[15]/div[1]/div[2]', btn: "//thead/tr[1]/th[15]/div[2]/span[1]/div[1]/button[1]/span[1]",
                select: "//thead/tr[1]/th[15]/div[2]/span[1]/div[1]/div[1]/button[26]/span[1]/input[1]", search: "//thead/tr[1]/th[15]/div[2]/a[1]", isSelect: true
            },
       
        ]

        DossierFilterTexts.forEach((filtertext) => {

            if (filtertext.isSelect) {
                cy.xpath(filtertext.id).click();
                cy.xpath(filtertext.btn).click({ force: true });
                cy.xpath(filtertext.select).click({ force: true });
                cy.xpath(filtertext.search).click({ force: true });
                cy.title().should('eq', 'CATIdoc | Lista de E-Protocolos');

            } else if (filtertext.data) {
                //logica data
                cy.xpath(filtertext.id).click();
                cy.get(filtertext.input).clear().type(filtertext.text);
                cy.xpath(filtertext.search).click();
                cy.title().should('eq', 'CATIdoc | Lista de E-Protocolos');

            } else if (!filtertext.isSelect) {
                cy.xpath(filtertext.id).click({ force: true });
                cy.get(filtertext.input).type(filtertext.text);
                cy.get(filtertext.search).click({ force: true });
                cy.title().should('eq', 'CATIdoc | Lista de E-Protocolos');
            }
        });

    }


    DossierColum(){
        const DossierColumnTexts = [
            "Nº Solicitação",
            "Identificador",
            "Nº Prenotação",
            "Nº Operação",
            "Cartório",
            "Última Atualização",
            "Data de envio para Central",
            "Data de vencimento da Prenotação",
            "Status",
            "Estado",
    
        ]
    
        DossierColumnTexts.forEach((columnText) => {
    
            cy.contains(columnText).click({force: true});
            cy.title().should('eq', 'CATIdoc | Lista de E-Protocolos');
    
        });
        cy.xpath("//thead/tr[1]/th[4]/div[1]/div[1]").click();//usuário
        cy.xpath('//thead/tr[1]/th[14]/div[1]/div[1]').click();//spe
        cy.title().should('eq', 'CATIdoc | Lista de E-Protocolos');
    }

    importacaoLeilao(){

        cy.get('.icon_menu_protocols').click();//click menu
        cy.get('.e-protocol > :nth-child(5) > a').click();//click submenu
        cy.xpath("//button[contains(text(),'Nova importação')]").click();//new import
        cy.xpath("//input[@id='csv-fileupload-input']")
        .selectFile("cypress/fixtures/documents/Importação CRI - Teste.csv", { force: true })
        cy.xpath("//input[@id='zip-fileupload-input']")
        .selectFile("cypress/fixtures/documents/DOCS IMPORTACAO LEILÃO.zip", { force: true });
        cy.get('#operationNumberInput').type("Teste Regressivo")
        cy.xpath("//input[@id='signers-fullname-input']").type(`${firstname} ${lastname}`);
        cy.xpath("//input[@id='signers-document-input']").type(`${generate({ format: true })}`);
        cy.xpath("//input[@id='signers-email-input']").type(`${email}`);
        cy.get('#add').click();
        cy.xpath("//a[@id='form-submit']").click();

    }


}
module.exports = new DossierPage();