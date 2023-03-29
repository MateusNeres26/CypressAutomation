import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homepage = require("../../pages/HomePage");
const RcdePage = require("../../pages/RcdePage");
//Cenário 1 - Solicitação de PEDIDO CRI
Given("que eu esteja na página inicial e ", () => {
    cy.visit("/");
    homepage.efetuarLogin();
});

When("eu não informar nenhum dado", () => {
    homepage.pedidoRcdeNull();
});

Then("os campos obrigatórios exibirão mensagem de erro", () => {

    const expectedMessage = 'Campo obrigatório'
    const expectedMessage1 = 'Anexo obrigatório'
    cy.get('#rcde-issue-date-div > .personName-error-span').should('have.text', expectedMessage);
    cy.get('#rcde-document-type-div > .personName-error-span').should('have.text', expectedMessage);
    cy.get('.error').should('have.text', expectedMessage1);
    cy.get("#rcde-description-div > span").should('have.text', expectedMessage);
});


When("eu informar dados obrigatórios", () => {
    homepage.pedidoRCDE();
    homepage.RCDEformsAndFile();

});

Then("O pedido deverá ser enviado para central", () => {
    homepage.RCDEformSubmit();
    cy.get('#rcde-status-label-397').should('have.text', 'Em Análise');
    cy.title().should('eq', 'CATIdoc | RCDEs');
});

When("eu estiver em meus pedidos RCDE", () => {
    cy.get('.icon_menu_rcde').click();
    cy.get('.rcde > :nth-child(3) > a').click();
});

Then("Verificação de menus não retornará exceção", () => {
    RcdePage.RcdeColum();
});


When("eu estiver em meus pedidos RCDE1", () => {
    cy.get('.icon_menu_rcde').click();
    cy.get('.rcde > :nth-child(3) > a').click();
});

Then("Verificação de filtros não retornará exceção", () => {
    RcdePage.RcdeFilters();  
});

