Feature: Testes na página de cadastro

    Background:
        Given eu estiver na página de cadastro

    Scenario: Tentativa de cadastro sem informações
        When clicar btn salvar
        Then valida campos vazios obrigatórios
    
        Scenario: Realização de um cadastro
        When submeter informações válidas
        Then o cadastro deverá ser realizado com sucesso
        
        Scenario: Valida cadastro já realizado
        When submeter informações válidas!
        Then terei retorno de campo obrigaório