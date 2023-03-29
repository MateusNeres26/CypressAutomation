import SignInFactory from '../factories/SignInFactory';
import HomePage from '../pages/HomePage';



/// <reference types="Cypress-xpath" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'


describe('Módulo e-Protocolo', () => {

    it('Pedido de e-protocolo para CRI', () => {
        var homepage = new HomePage()
        var login = SignInFactory.login()

        homepage.acessarPaginaEstatica()
        homepage.efetuarLogin(login)
        homepage.registroGenericoCri(login)
        homepage.submeterArquivoAssinado(login)
        homepage.pagamento()
        const expectedMessage = 'Operação realizada com sucesso!'
        homepage.modalContentShouldBe(expectedMessage)
        cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage)

    })
})

describe('Módulo e-Protocolo', () => {

    it('Pedido de e-protocolo para SAEC', () => {


        var homepage = new HomePage()
        var login = SignInFactory.login()

        homepage.acessarPaginaEstatica()
        homepage.efetuarLogin(login)
        homepage.registroGenericoSaec(login)
        homepage.submeterArquivoAssinado(login)
        homepage.pagamento()
        const expectedMessage = 'Operação realizada com sucesso!'
        homepage.modalContentShouldBe(expectedMessage)
        cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage)

    })
})

describe('Módulo Certidão', () => {

    it('Pedido de certidão para CRI', () => {


        var homepage = new HomePage()
        var login = SignInFactory.login()

        homepage.acessarPaginaEstatica()
        homepage.efetuarLogin(login)
        homepage.certidaoMatriculaCRI(login)
        homepage.submeterCertidao()
        homepage.pagamento()
        const expectedMessage = 'Operação realizada com sucesso!'
        homepage.modalContentShouldBe(expectedMessage)
        cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage)

    })

    describe('Módulo Certidão', () => {

        it.skip('Pedido de certidão para SAEC', () => {
    
            //ESTUDAR SOBRE INTERAGIR COM IFRAME


            var homepage = new HomePage()
            var login = SignInFactory.login()
    
            homepage.acessarPaginaEstatica()
            homepage.efetuarLogin(login)
            homepage.certidaoMatriculaSAEC(login)
            cy.frameLoaded()
            cy.iframe('#certidaoFrame').find('#mat-input-0').click()

            
            // homepage.submeterCertidao()
            // homepage.pagamento()
            // const expectedMessage = 'Operação realizada com sucesso!'
            // homepage.modalContentShouldBe(expectedMessage)
            // cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage)
    
        })
    })





    describe('Módulo RCDE', () => {

        it.only('Pedido de RCDE', () => {
            var homepage = new HomePage()
            var login = SignInFactory.login()
            homepage.acessarPaginaEstatica()
            homepage.efetuarLogin(login)
            homepage.pedidoRCDE()
            homepage.pagamento()
            const expectedMessage = 'Operação realizada com sucesso!'
            homepage.modalContentShouldBe(expectedMessage)
            cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage)

            //verificar o motivo do arquivo não estar assinado.
    
        })
    })

    
    describe('Módulo Pesquisa Eletrônica', () => {

        it('Pesquisa Prévia', () => {
            var homepage = new HomePage()
            var login = SignInFactory.login()
    
            homepage.acessarPaginaEstatica()
            homepage.efetuarLogin(login)
            homepage.pesquisaPrevia(login)
            homepage.pagamento()
            // const expectedMessage = 'Operação realizada com sucesso!'
            // homepage.modalContentShouldBe(expectedMessage)
            // cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage)

            //comando comentado é pq o pedido vai direto pra pedidos efetuados.
    
        })
    })

    describe('Módulo Pesquisa Bens', () => {

        it('Pesquisa Bens', () => {
            var homepage = new HomePage()
            var login = SignInFactory.login()
    
            homepage.acessarPaginaEstatica()
            homepage.efetuarLogin(login)
            homepage.pesquisaBens(login)
    
        })
    })


    describe('Módulo Matrícula Online', () => {

        it('Matrícula Online Cri', () => {
            var homepage = new HomePage()
            var login = SignInFactory.login()
    
            homepage.acessarPaginaEstatica()
            homepage.efetuarLogin(login)
            homepage.matriculaCri(login)
            homepage.pagamento()
            const expectedMessage = 'Operação realizada com sucesso!'
            homepage.modalContentShouldBe(expectedMessage)
            cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage)
    
        })
    })

    describe('Módulo Matrícula Online', () => {

        it('Matrícula Online Saec', () => {
            var homepage = new HomePage()
            var login = SignInFactory.login()
    
            homepage.acessarPaginaEstatica()
            homepage.efetuarLogin(login)
            homepage.matriculaSaec(login)
            homepage.pagamento()
            const expectedMessage = 'Operação realizada com sucesso!'
            homepage.modalContentShouldBe(expectedMessage)
            cy.xpath("//h2[contains(text(),'Operação realizada com sucesso!')]").should('have.text', expectedMessage)
    
        })
    })


})