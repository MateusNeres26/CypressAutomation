import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const homepage = require("../../pages/HomePage");
const financepage = require("../../pages/financePage");

//Cenário 1 - Verificação de Coluna
Given("que eu faça login na ", () => {
    cy.visit("/");
    homepage.efetuarLogin();
});

When("eu acessar o módulo Acompanhamento de crédito", () => {
    financepage.acompanhamentoDeCredito();
});

Then("validarei todas as colunas", () => {
    financepage.validaColunaAcompCrédito();
});
When("eu acessar o módulo Acompanhamento de crédito!", () => {
    financepage.acompanhamentoDeCredito();
});
Then("validarei todas os filtros", () => {
    financepage.validaFiltroAcompCrédito();
});
When("eu acessar o módulo Acompanhamento de crédito!!", () => {
    financepage.acompanhamentoDeCredito();
});
Then("validarei a compra de crédito pra cri", () => {
    financepage.comprarCréditosCRI();
    cy.wait(20000);
    financepage.validaGeraçãoBoleto();
});
When("eu acessar o módulo Acompanhamento de crédito!!!", () => {
    financepage.acompanhamentoDeCredito();
});
Then("validarei a compra de crédito pra SAEC", () => {
    financepage.comprarCréditosSaec();
    cy.wait(20000);
    financepage.validaGeraçãoBoleto();
        
});
//validação de filtros e colunas boletos gerados
When("eu acessar o módulo Boletos gerados", () => {
    financepage.boletosGerados();
});
Then("validarei todas as colunas em boletos gerados", () => {
    financepage.validaColunasBoletosGerados();
    
});
When("eu acessar o módulo de boletos gerados!", () => {
    financepage.boletosGerados();
});
Then("validarei todos os filtros de boletos gerados", () => {
    financepage.validaFiltroBoletosGerados();
    
});
//validação de filtros e colunas em carrinho de compras
When("eu acessar o módulo carrinho de compras", () => {
    financepage.carrinhoDeCompras();
});
Then("validarei todas as colunas em carrinho de compras", () => {
    financepage.validaColunasCarinhoDeCompras();
    
});
When("eu acessar o módulo carrinho de compras!", () => {
    financepage.carrinhoDeCompras();
});
Then("validarei todos os filtros de carrinho de compras", () => {
    financepage.validaFiltroCarrinhoDeCompras();
    
});

//validação de filtros e colunas em Faturas
When("eu acessar o módulo Faturas", () => {
    financepage.faturas();
});
Then("validarei todas as colunas em Faturas", () => {
    financepage.validaColunasFaturas();
    
});
When("eu acessar o módulo Faturas!", () => {
    financepage.faturas();
});
Then("validarei todos os filtros de Faturas", () => {
    financepage.validaFiltroFaturas(); 
});

//validação de filtros e colunas em Movimentações
When("eu acessar o subitem Movimentações", () => {
    financepage.movimentacoes();
});
Then("validarei todas as colunas em Movimentações", () => {
    financepage.validaColunasMovimentacoes();
    
});
When("eu acessar o subitem Movimentações!", () => {
    financepage.movimentacoes();
});
Then("validarei todos os filtros de Movimentações", () => {
    financepage.validaFiltroMovimentacoes();
});

//valida se a página de saldos está abrindo
When("eu acessar o subitem Saldos", () => {
    financepage.gerenciamentoSaldos();
});
Then("validarei o título da página de saldos", () => {
    financepage.validaTelaGerenciamento(); 
});
//Valida se a página de taxas a faturar está abrindo
When("eu acessar o subitem taxas a faturar", () => {
    financepage.gerenciamentoTxFaturar();
});
Then("validarei o título da página de taxas a faturar", () => {
    financepage.validaTelaGerenciamento(); 
});
//Valida se a página de movimentacoes de credito está abrindo
When("eu acessar o subitem movimentacoes de credito", () => {
    financepage.gerenciamentoMovCrédito();
});
Then("validarei o título da página de movimentacoes de credito", () => {
    financepage.validaTelaGerenciamento(); 
});
//Valida se a página de extratos está abrindo
When("eu acessar o subitem extratos", () => {
    financepage.gerenciamentoExtrato();
});
Then("validarei o título da página de extratos", () => {
    financepage.validaTelaGerenciamento(); 
});
