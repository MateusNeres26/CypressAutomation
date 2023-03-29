Feature: Validar todo módulo financeiro

    Background:
        Given eu fizer login e estiver logado

    Scenario: Validar colunas em Acompanhamento de créditos
        When eu acessar o módulo Acompanhamento de crédito
        Then validarei todas as colunas

    Scenario: Validar filtros em Acompanhamento de créditos
        When eu acessar o módulo Acompanhamento de crédito!
        Then validarei todas os filtros

    Scenario: Comprar crédito cri
        When eu acessar o módulo Acompanhamento de crédito!!
        Then validarei a compra de crédito pra cri

    Scenario: Comprar crédito SAEC
        When eu acessar o módulo Acompanhamento de crédito!!!
        Then validarei a compra de crédito pra SAEC

    Scenario: Validar colunas em boletos gerados
        When eu acessar o módulo Boletos gerados
        Then validarei todas as colunas em boletos gerados

    Scenario: Validar Filtros em boletos gerados
        When eu acessar o módulo de boletos gerados!
        Then validarei todos os filtros de boletos gerados

    Scenario: Validar colunas em carrinho de compras
        When eu acessar o módulo carrinho de compras
        Then validarei todas as colunas em carrinho de compras

    Scenario: Validar Filtros em carrinho de compras
        When eu acessar o módulo carrinho de compras!
        Then validarei todos os filtros de carrinho de compras

    Scenario: Validar colunas em Faturas
        When eu acessar o módulo Faturas
        Then validarei todas as colunas em Faturas

    Scenario: Validar Filtros em Faturas
        When eu acessar o módulo Faturas!
        Then validarei todos os filtros de Faturas

    Scenario: Validar colunas em Faturas
        When eu acessar o subitem Movimentações
        Then validarei todas as colunas em Movimentações

    Scenario: Validar Filtros em Faturas
        When eu acessar o subitem Movimentações!
        Then validarei todos os filtros de Movimentações

    Scenario: Valida se a página de saldos está abrindo
        When eu acessar o subitem Saldos
        Then validarei o título da página de saldos

    Scenario: Valida se a página de taxas a faturar está abrindo
        When eu acessar o subitem taxas a faturar
        Then validarei o título da página de taxas a faturar

    Scenario: Valida se a página de movimentacoes de credito está abrindo
        When eu acessar o subitem movimentacoes de credito
        Then validarei o título da página de movimentacoes de credito

    Scenario: Valida se a página de extratos está abrindo
        When eu acessar o subitem extratos
        Then validarei o título da página de extratos

    
    


        