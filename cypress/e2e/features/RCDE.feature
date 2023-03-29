Feature: Registro de RCDE sem dados preenchidos

    Background:
        Given que eu esteja na página inicial

    Scenario: Exibição de alertas de campos não preenchidos
        When eu não informar nenhum dado
        Then os campos obrigatórios exibirão mensagem de erro

    Scenario: Submeter pedido RCDE
        When eu informar dados obrigatórios
        Then O pedido deverá ser enviado para central

    Scenario: Validar Menus
        When eu estiver em meus pedidos RCDE
        Then Verificação de menus não retornará exceção

    Scenario: Validar Filtros
        When eu estiver em meus pedidos RCDE1
        Then Verificação de filtros não retornará exceção