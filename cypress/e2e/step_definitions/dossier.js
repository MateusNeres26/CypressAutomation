import {
    Given,
    When,
    Then,

} from "@badeball/cypress-cucumber-preprocessor";
const homepage = require("../../pages/HomePage");
const dossierpage = require("../../pages/dossierPage");
//Cenário 1 - Solicitação de PEDIDO CRI
Given("que eu esteja na página inicial", () => {
    cy.visit("/");
    homepage.efetuarLogin();
});

When("informar os dados obrigatórios", () => {
    homepage.registroGenericoCri();
    homepage.submeterDocumentoDossier();
    homepage.submeterArquivoAssinado(); 
    homepage.pagamento();
});

Then("o pedido deve ser enviado para central", () => {
    const expectedMessage = 'Operação realizada com sucesso!'
    homepage.modalContentShouldBe(expectedMessage);
    cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage);
});

//Scenario 2

When("eu não informar os dados obrigatórios", () => {
    homepage.registroGenericoCriNull();
    homepage.submeterDocumentoDossier();
});

Then("error message {string} is displayed", () => {
    var expected = 'Preencha todos os campos obrigatórios para continuar!'
    cy.wait(1000);
    cy.xpath("//div[contains(text(),'Preencha todos os campos obrigatórios para continu')]").should('contain.text', expected);
});

//CENÁRIO 3 - SOLICITAÇÃO DE PEDIDO PARA SAEC
When("informar os dados obrigatórios SAEC", () => {
    homepage.registroGenericoSaec();
    homepage.submeterDocumentoDossier();
    homepage.submeterArquivoAssinado(); 
    homepage.pagamento();
});

Then("o pedido deve ser enviado para central SAEC", () => {
    const expectedMessage = 'Operação realizada com sucesso!'
    homepage.modalContentShouldBe(expectedMessage);
    cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage);
});

//cenário 4
When("eu estiver em meus pedidos E-Protocolo", () => {
    cy.get('.icon_menu_protocols').click({force: true});
    cy.get('.e-protocol > :nth-child(3) > a').click({force: true});
});

Then("Verificação de colunas não retornará exceção", () => {
    dossierpage.DossierColum();
});

//cenário 5
When("eu estiver em meus pedidos E-Protocolo1", () => {
    cy.get('.icon_menu_protocols').click({force: true});
    cy.get('.e-protocol > :nth-child(3) > a').click({force: true});
});

Then("Verificação de filtros não retornará exceção em e-protocolos", () => {
    dossierpage.DossierFilters();  
});

//cenário 6 Cadastro de Signatário
When("eu estiver na tela de cadastro de Signatário", () => {
    cy.get('.icon_menu_protocols').click();//click menu
    cy.get('.e-protocol > :nth-child(4) > a').click();//click submenu
    cy.xpath("//a[contains(text(),'Adicionar')]").click();//add signatário
    cy.xpath("//input[@id='input-person-name']").type("Teste Regressivo");
    cy.xpath("//input[@id='input-person-document-number']").type("804.066.458-68");
    cy.xpath("//input[@id='input-person-email']").type("mateus.isaac.daluz@brasildakar.com.br");
    cy.xpath("//button[contains(text(),'Salvar')]").click();
    //cy.contains("carlalaissales@contjulioroberto.com.br").should('be.visible');

});

Then("eu irei cadastrar um signatário com sucesso", () => {
    cy.contains("mateus.isaac.daluz@brasildakar.com.br").should('be.visible');

});
// AQUI ESTA GENRANDO ELEMENTOS ALEATORIOS, VERIFICAR O QUE É.
When("eu estiver na tela de cadastro de Signatário1", () => {
    cy.get('.icon_menu_protocols').click();//click menu
    cy.get('.e-protocol > :nth-child(4) > a').click();//click submenu
    cy.get('[id^="checkbox-signer"]').eq(-1).click({force: true});
    cy.get("#btn-remove-signers").click();
    cy.get('#btn-confirm-delete').click();
});

Then("eu irei deletar um signatário com sucesso", () => {

    const expectedMessage = 'Signatário(s) removido(s) com sucesso!'
    cy.xpath("//div[contains(text(),'Signatário(s) removido(s) com sucesso!')]").should('have.text', expectedMessage);

});

//Removido para realização manual
// When("eu estiver na tela de Importação de Leilão", () => {

//     dossierpage.importacaoLeilao();

// });

// Then("eu enviarei com sucesso os arquivos solicitados", () => {
//     const expectedMessage = "\n\tImportação executada em segundo plano...\r\nNão é necessário esperar finalizar.\n\t\n\t ×\n\t\n"
//     cy.get('.snackbar-text').should('be.visible', expectedMessage);
    
// });





