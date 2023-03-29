import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given("que eu esteja na tela de login", () => {
  cy.visit("/");
});
// Scenario 1 : Login with Valid crediential
When("Um usuário submeter o login e a senha, e clicar no botão de login", () => {
  loginPage.submitLogin(Cypress.env('username'),Cypress.env('password'))
  
});

Then("Validade the title after login", () => {
  loginPage.verifyPageTitle();
});


When("Um usuário submeter o login incorreto e a senha correta, e clicar no botão de login", () => {
  loginPage.submitIncorrectUser();
  
});

Then("Validar a mensagem de erro de login", () => {
  loginPage.verifyErrorMessage();
});

When("Um usuário submeter o login  correto e a senha incorreta, e clicar no botão de login", () => {
  loginPage.submitIncorretPass();
  
});

Then("Validar a mensagem de erro de login!", () => {
  loginPage.verifyErrorMessage();
});

When("Um usuário submeter o login e a senha incorretos, e clicar no botão de login", () => {
  loginPage.submitIncorrectLogin();
  
});

Then("Validar a mensagem de erro de login!!", () => {
  loginPage.verifyErrorMessage();
});
