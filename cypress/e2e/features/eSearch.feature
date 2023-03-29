Feature: Solicitar Pesquisas Eletrônicas.

    Background:
        Given que eu esteja na tela de novo pedido

    Scenario: Solicitar Pesquisa para estado ES
        When eu finalizar o preechimento de informações
        Then o pedido será finalizado e enviado para a central


    Scenario: Solicitar Pesquisa  de bens para afonso claudio
        When eu preencher as informações solicitadas
        Then o pedido deve ser finalizado e enviado para a central

    Scenario: Validar mensagem de um único pedido para pesquisa prévia
        When eu preencher as informações
        Then o pedido deve retornar erro "Já existe pedido realizado para esse convênio, com mesmo CPF/CNPJ e para os mesmos cartórios em menos de 24hs!"

    Scenario: Validar Menus de eSearch
        When eu estiver em meus pedidos de pesquisa eletrônica
        Then Verificação de menus eSearch não retornará exceção

    Scenario: Validar Filtros de eSearch
        When eu estiver em meus pedidos de pesquisa eletrônica1
        Then Verificação de filtros eSearch não retornará exceção