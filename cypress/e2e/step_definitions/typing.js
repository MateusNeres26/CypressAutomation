import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homepage = require("../../pages/HomePage");
const typingpage = require("../../pages/typingPage");

//Cenário 1 - Verificação de Coluna
Given("eu fizer login e estiver logado", () => {
    cy.visit("/");
    homepage.efetuarLogin();
});

When("eu estiver na tela de e-protocolo pendente digitação", () => {
    typingpage.pendenteDigitacao();
});

Then("validarei as colunas e filtros na tela de e-protocolo pendente digitação", () => {
    typingpage.validaColunas();
    typingpage.ValidaFiltros();
});

When("eu estiver na tela de e-protocolo pendente revisao", () => {
    typingpage.pendenteRevisao();
});

Then("validarei as colunas e filtros na tela de e-protocolo pendente revisao", () => {
    typingpage.validaColunas();
    typingpage.ValidaFiltros();
});

When("eu estiver na tela de e-protocolo pendente exigencia", () => {
    typingpage.pendenteEmExigencia();
});

Then("validarei as colunas e filtros na tela de e-protocolo pendente exigencia", () => {
    typingpage.validaColunas();
    typingpage.ValidaFiltros();
});
