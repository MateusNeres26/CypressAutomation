import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homepage = require("../../pages/HomePage");
const oregistrationpage = require("../../pages/OnlineRegistrationPage");

Given("que eu esteja na página inicial e ", () => {
    cy.visit("/");
    homepage.efetuarLogin();
});

When("eu não informar nenhum tipo de dado", () => {
    homepage.matriculaNull();
    
});

Then("os campos obrigatórios exibirão mensagem de erro em matrícula Online", () => {
    const expectedMessage = 'Selecione uma cidade'
    const expectedMessage1 = 'Selecione um cartório'
    const expectedMessage2 = 'É necessário informar ao menos um imóvel.'
    cy.get('#address-city-div > span').should('have.text', expectedMessage);
    cy.get('#select-registry-office-div > span').should('have.text', expectedMessage1);
    cy.get('#error-message-label').should('have.text', expectedMessage2);

});

When("eu informar matrícula com mais de 7 caracteres", () => {
    homepage.matricula7Caracter();
    
});

Then("receberei uma mensagem de alerta sobre o erro", () => {
    const expectedMessage = 'A matrícula enviada para a SAEC não pode ter mais do que 7 caracteres!\r\n'
    cy.xpath("//div[contains(text(),'A matrícula enviada para a SAEC não pode ter mais ')]").should('have.text', expectedMessage);
});

When("eu informar dados obrigatórios para CRI", () => {
    homepage.matriculaCri();
    
});

Then("O pedido deverá ser enviado para central CRI", () => {
    homepage.pagamento();
    const expectedMessage = 'Operação realizada com sucesso!'
    cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage);
});

When("eu informar dados obrigatórios para SAEC", () => {
    homepage.matriculaSaec();
});
Then("O pedido deverá ser enviado para central SAEC", () => {
    homepage.pagamento();
    const expectedMessage = 'Operação realizada com sucesso!'
    cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage);
});





//validação de filtros e colunas

When("eu estiver em meus pedidos de matrícula Online", () => {
    cy.get('.icon_menu_online_registration').click();
    cy.get('.online-registration > :nth-child(3) > a').click();
});

Then("Verificação de menus de matrícula não retornará exceção", () => {
    oregistrationpage.OnlineRegistrationColum();
});


When("eu estiver em meus pedidos de matrícula Online1", () => {
    cy.get('.icon_menu_online_registration').click();
    cy.get('.online-registration > :nth-child(3) > a').click();
});

Then("Verificação de filtros de matrícula não retornará exceção", () => {
    oregistrationpage.OnlineRegistrationFilters();
});