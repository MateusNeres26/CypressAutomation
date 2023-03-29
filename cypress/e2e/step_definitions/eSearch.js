import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homepage = require("../../pages/HomePage");
const esearch = require("../../pages/eSearchPage");
//Cenário 1 - Solicitação de PEDIDO CRI
Given("que eu esteja na tela de novo pedido", () => {
    cy.visit("/");
    homepage.efetuarLogin();
});

When("eu finalizar o preechimento de informações", () => {
    homepage.pesquisaPrevia();
});

Then("o pedido será finalizado e enviado para a central", () => {
    homepage.pagamento();
    const expectedMessage = 'Operação realizada com sucesso!'
    cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage);
    
});


When("eu preencher as informações solicitadas", () => {
    homepage.pesquisaBens();
});

Then("o pedido deve ser finalizado e enviado para a central", () => {
    homepage.pagamento();
    const expectedMessage = 'Operação realizada com sucesso!'
    cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage);

});

When("eu preencher as informações", () => {
    homepage.pesquisaPrevia();
});

Then("o pedido deve retornar erro {string}", () => {
    const expectedMessage = 'Já existe pedido realizado para esse convênio, com mesmo CPF/CNPJ e para os mesmos cartórios em menos de 24hs!\r\n'
    cy.xpath("//div[contains(text(),'Já existe pedido realizado para esse convênio, com')]").should('have.text', expectedMessage);

});

When("eu estiver em meus pedidos de pesquisa eletrônica", () => {
    cy.get('.icon_menu_electronic_search').click();
    cy.get('.electronic-search > :nth-child(4) > a').click();
});

Then("Verificação de menus eSearch não retornará exceção", () => {
    esearch.EletronicSearchColum();
});


When("eu estiver em meus pedidos de pesquisa eletrônica1", () => {
    cy.get('.icon_menu_electronic_search').click();
    cy.get('.electronic-search > :nth-child(4) > a').click();
});

Then("Verificação de filtros eSearch não retornará exceção", () => {
    esearch.EletronicSearchFilters();  
});

