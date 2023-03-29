class homeCatiPage {
  elements = {
    usernameInput: () => cy.xpath("//input[@id='username']"),
    passwordInput: () => cy.xpath("//input[@id='password']"),
    loginBtn: () => cy.get("#login"),
  };

  typeUsername() {
    this.elements.usernameInput().type(Cypress.env('username'));
  }

  typePassword() {
    this.elements.passwordInput().type(Cypress.env('password'));
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(){
    this.elements.usernameInput().type(Cypress.env('username'), {log: false});
    this.elements.passwordInput().type(Cypress.env('password'), {log: false});
    this.elements.loginBtn().click();
  }

  submitIncorrectUser(){
    this.elements.usernameInput().type(Cypress.env('IncorrectUsername'), {log: false});
    this.elements.passwordInput().type(Cypress.env('password'), {log: false});
    this.elements.loginBtn().click();
  }

  submitIncorretPass(){
    this.elements.usernameInput().type(Cypress.env('username'), {log: false});
    this.elements.passwordInput().type(Cypress.env('IncorrectPassword'), {log: false});
    this.elements.loginBtn().click();
  }

  submitIncorrectLogin(){
    this.elements.usernameInput().type(Cypress.env('IncorrectUsername'), {log: false});
    this.elements.passwordInput().type(Cypress.env('IncorrectPassword'), {log: false});
    this.elements.loginBtn().click();
  }

  verifyErrorMessage(){
   const expectedMessage = 'Usuário ou senha incorretos- Bad credentials'
   cy.xpath("//span[contains(text(),'Usuário ou senha incorretos- Bad credentials')]")
   .should('have.text', expectedMessage);
  }

  verifyPageTitle() {
    cy.title().should('eq', 'Empresa | Home');
    }
}

module.exports = new homeCatiPage();
