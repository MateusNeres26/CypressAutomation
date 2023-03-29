import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homepage = require("../../pages/HomePage");
const certificatepage = require("../../pages/certificatePage");

//Cenário 1 - Solicitação de PEDIDO CRI
Given("eu acesse a página inicial e que eu acesse o menu <Novo Pedido>", () => {
    cy.visit("/");
    homepage.efetuarLogin();
});

When("eu submeter dados obrigatórios", () => {
    homepage.certidaoMatriculaCRI();
    homepage.submeterCertidao();
    homepage.pagamento();
});

Then("o pedido será enviado para a central", () => {
    const expectedMessage = 'Operação realizada com sucesso!'
    homepage.modalContentShouldBe(expectedMessage);
    cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage);
});

When("eu não preencher dados obrigatórios", () => {
    homepage.certidaoMatriculaCRINull();
});

Then("retornará erro na página", () => {
    const expectedMessage = '[ ERROR ] - Por favor confira todos os campos obrigatórios.\n'
    cy.xpath("//label[@id='error-message-label']").should('have.text', expectedMessage);
});


When("eu somente preencher tipo de certidão", () => {
    homepage.certidaoMatriculaCRINull1();
});


Then("retornará {string} na página", () => {
    const expectedMessage = 'Selecione um tipo de entrega'
    cy.xpath("//span[contains(text(),'Selecione um tipo de entrega')]").should('have.text', expectedMessage);
});

When("eu não preencher nome e CPF", () => {
    homepage.certidaoMatriculaCriCpf();
});

Then("retornará {string} em ambos campos", () => {
    const expectedMessage = 'Campo obrigatório!'
    cy.xpath("//body/div[@id='certificate-request-parent-content-div']/div[@id='certificate-request-registration-view']/section[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]")
    .should('have.text', expectedMessage);
    cy.xpath("//body/div[@id='certificate-request-parent-content-div']/div[@id='certificate-request-registration-view']/section[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/span[1]")
    .should('have.text', expectedMessage);
});

When("eu estiver em meus pedidos de certidão", () => {
    cy.get('.icon_menu_certificate').click({force: true});
    cy.get('.certificate-request > :nth-child(3) > a').click({force: true});
});

Then("Verificação de colunas não retornará exceção em certidão", () => {
    certificatepage.CertificateColum();
});

When("eu estiver em meus pedidos de certidão!", () => {
    cy.get('.icon_menu_certificate').click({force: true});
    cy.get('.certificate-request > :nth-child(3) > a').click({force: true});
});

Then("Verificação de filtros não retornará exceção!", () => {
    certificatepage.CertificateFilters();  
});




