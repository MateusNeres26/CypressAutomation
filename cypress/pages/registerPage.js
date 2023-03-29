var faker = require('faker');
import { generate } from 'gerador-validador-cpf';

class registerPage{



    clickSave(){
        cy.get('#btn-save').click();
    }

    validaCamposObrigatórios(){
        const expectedMessage = "Campo obrigatório!";
        cy.get('#name-div > span').should('have.text', expectedMessage);
        cy.get('#fantasy-name-div > span').should('have.text', expectedMessage);
        cy.get('#document-number-div > span').should('have.text', expectedMessage);
        cy.get('#covenant-email-div > span').should('have.text', expectedMessage);
        cy.get('#convenant-phone-div > span').should('have.text', expectedMessage);
        cy.get('#address-state-div > span').should('have.text', expectedMessage);
    }

    setarInformacoesValidas(){
        var firstname = faker.name.firstName();
        var lastname = faker.name.lastName();
        var email = faker.internet.email(firstname);
        var cpf = `${generate({ format: true })}`;

        cy.get('#convenant-name-input').type(`${firstname} ${lastname}`);
        cy.get('#fantasy-name-input').type("Empresa do Teste Regressivo");
        cy.get('#convenant-document-number-input').type(`${cpf}`);
        cy.get('#email-input').type(`${email}`);
        cy.get('#email-confirmation-input').type(`${email}`);
        cy.get('#phone-number-input').type("3112345697");
        cy.get('#covenant_cep').type("78705886")
        cy.wait(2000);
        cy.get('#covenant_number').type("123");
    }
    
    msgCadastroSucesso(){
        const expectedMessage = "\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tAgora é só aguardar a aprovação.\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t"
        
        cy.get('.sucess-text > :nth-child(2)').should('have.text', expectedMessage);
    }

    validaCampoJaCadastrado(){
        const documentExpectedMessage = "Documento já foi cadastrado!";
        const emailExpectedMessage = "Email já foi cadastrado!";

        cy.get('#document-number-div > span').should('have.text', documentExpectedMessage);
        cy.get('#covenant-email-div > span').should('have.text', emailExpectedMessage);
    }

}

module.exports = new registerPage();