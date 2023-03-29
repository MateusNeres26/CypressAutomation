Feature: Validar filtros e colunas do módulo de digitação

    Background:
        Given que eu esteja na página inicial

    Scenario: Validar colunas e filtros na tela de e-protocolo pendente digitação
        When eu estiver na tela de e-protocolo pendente digitação
        Then validarei as colunas e filtros na tela de e-protocolo pendente digitação

    Scenario: Validar colunas e filtros na tela de e-protocolo pendente revisao
        When eu estiver na tela de e-protocolo pendente revisao
        Then validarei as colunas e filtros na tela de e-protocolo pendente revisao

    Scenario: Validar colunas e filtros na tela de e-protocolo pendente exigencia
        When eu estiver na tela de e-protocolo pendente exigencia
        Then validarei as colunas e filtros na tela de e-protocolo pendente exigencia

    