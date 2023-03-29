import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const registerPage = require("../../pages/registerPage");

//Cenário 1 - Verificação de Coluna
Given("eu estiver na página de cadastro", () => {
    cy.visit("https://Sua_URL/cadastro/");
    
});

When("clicar btn salvar", () => {
    registerPage.clickSave();
});

Then("valida campos vazios obrigatórios", () => {
       //Por enquanto, é necessário trocar email manualmente.
    registerPage.validaCamposObrigatórios();
});

When("submeter informações válidas", () => {
    registerPage.setarInformacoesValidas();
});

Then("o cadastro deverá ser realizado com sucesso", () => {
    registerPage.clickSave();
    registerPage.msgCadastroSucesso();
    

});

When("submeter informações válidas!", () => {
    registerPage.setarInformacoesValidas();
    registerPage.clickSave();
});

Then("terei retorno de campo obrigaório", () => {
    registerPage.validaCampoJaCadastrado();
});