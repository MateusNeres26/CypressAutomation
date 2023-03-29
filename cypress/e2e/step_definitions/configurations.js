import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homepage = require("../../pages/HomePage");
const configpage = require("../../pages/configurationsPage");

//Cenário 1 - Solicitação de PEDIDO CRI
Given("eu acesse a página inicial e que eu acesse o menu de configuracões", () => {
    cy.visit("/");
    homepage.efetuarLogin();
});

When("eu acessar a configuracoes de usuarios", () => {
    configpage.usuarios();
});

Then("eu validarei as colunas e filtros em configuracoes de usuarios", () => {
    configpage.validaColunas();
    configpage.validaFiltros();
});

When("eu acessar a configuracoes de usuarios!", () => {
    configpage.usuarios();
    configpage.formUserAdd();
});

Then("eu validarei todos campos obrigatorios", () => {
    configpage.validaMsgErroUsuario();
});

When("eu acessar a configuracoes de usuarios!!", () => {
    configpage.usuarios();
    configpage.formUserAdd();
});

Then("eu validarei campos obrigatorios", () => {
    configpage.createUser();
});