Feature: Modulo de configuracões

    Background:
        Given eu acesse a página inicial e que eu acesse o menu de configuracões

    Scenario: Verificação de colunas em configuracoes de usuarios
        When eu acessar a configuracoes de usuarios
        Then eu validarei as colunas e filtros em configuracoes de usuarios
        
    Scenario: Submeter formulário vazio
        When eu acessar a configuracoes de usuarios!
        Then eu validarei todos campos obrigatorios

            
    # Scenario: Submeter formulário incorreto
    #     When eu acessar a configuracoes de usuarios!!
    #     Then eu validarei campos obrigatorios

