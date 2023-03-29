var faker = require('faker');
import { generate } from 'gerador-validador-cpf';
var firstname = faker.name.firstName();
var lastname = faker.name.lastName();
var email = faker.internet.email(firstname);
var cpf = `${generate({ format: true })}`;

class HomePage {

    acessarPaginaEstatica() {
        cy.visit('/')
        cy.get('head title').should('have.text', 'Empresa - Central de registro de imóvel online, cartório Online, serviços bancários,\n\t\tdespachantes ')
        cy.xpath("//a[contains(text(),'Entrar')]").click();
    }
    efetuarLogin() {
        cy.xpath("//input[@id='username']").type(Cypress.env('username'),{log: false});
        cy.xpath("//input[@id='password']").type(Cypress.env('password'), {log: false});
        cy.get('#login').click();
    }
    registroGenericoCriNull() {
        cy.get('.icon_menu_protocols').click();
        cy.get('.e-protocol > :nth-child(2) > a').click();
    }

    registroGenericoCri() {
        cy.get('.icon_menu_protocols').click();
        cy.get('.e-protocol > :nth-child(2) > a').click();
        cy.xpath("//body[1]/div[2]/div[1]/section[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[3]/select[1]")
            .select('Belo Horizonte');
        cy.xpath("//body[1]/div[2]/div[1]/section[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[4]/select[1]")
            .select('Cartório Belo Horizonte - 1º Ofício');
        cy.xpath("//input[@id='input-dossier-identifier']").type("Teste Regressivo");
    }
    submeterDocumentoDossier() {

        cy.xpath("//li[@id='show-document-list-tab']").click();
    }
    registroGenericoSaec() {
        cy.get('.icon_menu_protocols').click();
        cy.get('.e-protocol > :nth-child(2) > a').click();
        cy.xpath("//select[@id='select-state']").select('SP');
        cy.xpath("//body[1]/div[2]/div[1]/section[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[3]/select[1]").select('São Paulo');
        cy.xpath("//body[1]/div[2]/div[1]/section[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[4]/select[1]")
            .select('1º OFICIAL DE REGISTRO DE IMÓVEIS DA COMARCA DE SÃO PAULO - SP');
        cy.xpath("//input[@id='input-dossier-identifier']").type("Teste Regressivo");
    }

    certidaoMatriculaCRI() {

        cy.get('.icon_menu_certificate').click();
        cy.get('.certificate-request > :nth-child(2) > a').click();
        cy.get('#select-certificate-type').select('Certidão de Propriedade');
        cy.get('#mySearch').type('Belo Horizonte');
        cy.get(':nth-child(26) > .caret').click();
        cy.xpath("//input[@id='28']").click();
        cy.get('#select-delivery-type').select('Digital');
        cy.xpath("//input[@id='certificate-request-identifier-input']").type('Teste Regressivo');
        cy.xpath("//input[@id='certificate-request-person-name-input']").type(`${firstname} ${lastname}`);
        cy.xpath("//input[@id='certificate-request-person-document-number-input']")
        .type(`${generate({ format: true })}`);
        cy.get('#btn-add-certificate').click();//Inserir Certidão
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/section[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/button[1]/span[1]").click();
    }

    certidaoMatriculaCRINull() {
        cy.get('.icon_menu_certificate').click();
        cy.get('.certificate-request > :nth-child(2) > a').click();
        cy.get('#btn-add-certificate').click();//Inserir Certidão
    }

    certidaoMatriculaCRINull1() {
        cy.get('.icon_menu_certificate').click();
        cy.get('.certificate-request > :nth-child(2) > a').click();
        cy.get('#select-certificate-type').select('Certidão de Propriedade');
        cy.get('#btn-add-certificate').click();//Inserir Certidão
    }

    certidaoMatriculaCriCpf() {
        cy.get('.icon_menu_certificate').click();
        cy.get('.certificate-request > :nth-child(2) > a').click();
        cy.get('#select-certificate-type').select('Certidão de Propriedade');
        cy.get('#select-delivery-type').select('Digital');
        cy.get('#btn-add-certificate').click();//Inserir Certidão
    }



    certidaoMatriculaSAEC() {
        cy.get('.icon_menu_certificate').click();
        cy.get('.certificate-request > :nth-child(2) > a').click();
        cy.xpath("//select[@id='select-state']").select('SP');
        //continuar buscando elementos dentro do iframe
    }

    pedidoRCDE() {
        //Mudolo RCDE
        cy.get('.icon_menu_rcde').click();
        //Novo pedido
        cy.wait(5000);
        cy.get('.rcde > :nth-child(2) > a').click();
        //DataExpedição
        cy.get('#input-rcde-issue-date').type('05/10/2022');

    }

    RCDEformsAndFile() {
        //DataExpiração
        cy.get('#input-rcde-expiration-date').type('01/01/2023');
        //selecionar tipo doc
        cy.get('#select-rcde-document-type').select('Pacto Nupcial');
        //Subir Arquivo Assinado
        cy.xpath("//input[@id='fileupload']")
        .selectFile("cypress/fixtures/documents/Teste.p7s", { force: true })//attachFile(login.document)
        cy.get('#input-rcde-description').type('Teste Regressivo');
        cy.get('#rcde-documente-data-div > .stepper_bottom > .btn').click();

        cy.get('#related-parts-fullname-input').type('Pierre de Fermat');
        cy.get('#related-parts-document-input').type(`${generate({ format: true })}`);
        cy.get('#add').click();
    }
    RCDEformSubmit(){
    cy.get('#form-submit').click();
    }



pedidoRcdeNull() {
    //Mudolo RCDE
    cy.get('.icon_menu_rcde').click();
    //Novo pedido
    cy.get('.rcde > :nth-child(2) > a').click();
    //DataExpedição
    cy.get('#rcde-documente-data-div > .stepper_bottom > .btn').click();
}

pesquisaPrevia() {
    cy.get('.icon_menu_electronic_search').click();
    cy.get('.electronic-search > :nth-child(2) > a').click();
    cy.get('#ES').click();
    cy.get('#esearch-document-number-input').type(`${cpf}`);
    cy.get('#esearch-full-name-input').type(`${firstname} ${lastname}`);
    cy.get('#esearch-identifier-input').type('Teste regressivo');
    cy.get('#btn-add').click();
    cy.get('.col-sm-7 > .btn').click();
}

pesquisaBens() {
    cy.get('.icon_menu_electronic_search').click();
    cy.get('.electronic-search > :nth-child(3) > a').click();
    cy.get('#mySearch').type('Afonso Cláudio');
    cy.xpath("//input[@id='808']").click({force: true});
    cy.get('#esearch-document-number-input').type(`${cpf}`);
    cy.get('#esearch-full-name-input').type(`${firstname} ${lastname}`);
    cy.get('#esearch-identifier-input').type('Teste regressivo');
    cy.get('#btn-add').click();
    cy.get('.col-sm-7 > .btn').click();
}

matriculaNull() {
    cy.get('.icon_menu_online_registration').click();
    cy.get('.online-registration > :nth-child(2) > a').click();
    cy.get('.stepper_bottom > .btn').click();
}

matriculaCri() {
    cy.get('.icon_menu_online_registration').click();
    cy.get('.online-registration > :nth-child(2) > a').click();
    cy.get('#address-city-combobox').select('Belo Horizonte');
    cy.get('#select-registry-office').select('Cartório Belo Horizonte - 1º Ofício');
    cy.get('#select-estate-registry-book').select('2 - Matrícula');
    cy.get('#input-estate-registration-number').type('1234');
    cy.get('#input-estate-identifier').type('Teste Regressivo');
    cy.get('#btn-add').click();
    cy.get('.stepper_bottom > .btn').click();
}
matriculaSaec() {
    cy.get('.icon_menu_online_registration').click();
    cy.get('.online-registration > :nth-child(2) > a').click();
    cy.get('#address-state-combobox').select('SP');
    cy.get('#address-city-combobox').select('São Paulo');
    cy.get('#select-registry-office').select('1º OFICIAL DE REGISTRO DE IMÓVEIS DA COMARCA DE SÃO PAULO - SP');
    cy.get('#select-estate-registry-book').select('2 - Matrícula');
    cy.get('#input-estate-registration-number').type('29');
    cy.get('#input-estate-identifier').type('Teste Regressivo');
    cy.get('#btn-add').click();
    cy.xpath("//a[contains(text(),'Enviar')]").click();
}
matricula7Caracter() {
    cy.get('.icon_menu_online_registration').click();
    cy.get('.online-registration > :nth-child(2) > a').click();
    cy.get('#address-state-combobox').select('SP');
    cy.get('#address-city-combobox').select('São Paulo');
    cy.get('#select-registry-office').select('1º OFICIAL DE REGISTRO DE IMÓVEIS DA COMARCA DE SÃO PAULO - SP');
    cy.get('#select-estate-registry-book').select('2 - Matrícula');
    cy.get('#input-estate-registration-number').type('159756');
    cy.get('#input-estate-identifier').type('Teste Regressivo');
    cy.get('#btn-add').click();
    cy.xpath("//a[contains(text(),'Enviar')]").click();
}

submeterCertidao() {
    cy.xpath("//button[@id='btn-send-certificate']").click();
}
submeterArquivoAssinado() {

    cy.xpath("//button[contains(text(),'Adicionar documento')]").click();
    cy.xpath("//input[@id='add-new-document-file-input']").attachFile('../fixtures/documents/Teste.p7s');
    cy.xpath("//input[@id='checkbox-must-be-signed']").click();
    cy.xpath("//button[contains(text(),'Salvar')]").click();
    cy.xpath("//button[@id='btn-send-dossier']").click();
    cy.xpath("//body[1]/div[4]/div[1]/div[3]/button[1]").click();
}
pagamento() {
    cy.xpath("//tbody/tr[@id='tr-item-0']/td[1]/div[1]/label[1]").click();
    cy.xpath("//button[@id='btn-choose-payment-method']").click();
    cy.xpath("//input[@id='pay-with-credits']").click();
    cy.xpath("//button[@id='btn-finish-order']").click();

}
modalContentShouldBe(expectedMessage) {
    cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]")
        .should('have.text', expectedMessage);
}
}

module.exports = new HomePage();