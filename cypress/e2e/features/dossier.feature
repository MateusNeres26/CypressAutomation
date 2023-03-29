Feature: New registration Generic CRI

    Background:
        Given que eu esteja na página inicial

    Scenario: Sucesso na solicitação de um eprotocolo CRI
        When informar os dados obrigatórios
        Then o pedido deve ser enviado para central

    Scenario: Tentativa de envio sem preencher campo
        When eu não informar os dados obrigatórios
        Then error message "Preencha todos os campos obrigatórios para continuar!" is displayed

    Scenario: Sucesso na solicitação de um eprotocolo SAEC
        When informar os dados obrigatórios SAEC
        Then o pedido deve ser enviado para central   

    Scenario: Validação de colunas
        When eu estiver em meus pedidos E-Protocolo
        Then Verificação de colunas não retornará exceção

    Scenario: Validação de Filtros
        When eu estiver em meus pedidos E-Protocolo1
        Then Verificação de filtros não retornará exceção em e-protocolos

    Scenario: Cadastro de Signatário
        When eu estiver na tela de cadastro de Signatário
        Then eu irei cadastrar um signatário com sucesso

    Scenario: Deletar cadastro de Signatário
        When eu estiver na tela de cadastro de Signatário1
        Then eu irei deletar um signatário com sucesso
    #removido por não ser útil no momento, realizar manual
    # Scenario: Importação de Leilão
    #     When eu estiver na tela de Importação de Leilão
    #     Then eu enviarei com sucesso os arquivos solicitados
