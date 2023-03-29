Feature: Registro de Matrícula Online

    Background:
        Given que eu esteja na página inicial

    Scenario: Exibição de alertas de campos não preenchidos em matrícula Online
        When eu não informar nenhum tipo de dado
        Then os campos obrigatórios exibirão mensagem de erro em matrícula Online

    Scenario: Submeter pedido matrícula online
        When eu informar dados obrigatórios para CRI
        Then O pedido deverá ser enviado para central CRI

    Scenario: Submeter pedido matrícula online para SAEC
        When eu informar dados obrigatórios para SAEC
        Then O pedido deverá ser enviado para central SAEC
        
    Scenario: Submeter pedido matrícula online para SAEC com mais de 7 caractere
        When eu informar matrícula com mais de 7 caracteres
        Then receberei uma mensagem de alerta sobre o erro

    Scenario: Validar Menus
        When eu estiver em meus pedidos de matrícula Online
        Then Verificação de menus de matrícula não retornará exceção

    Scenario: Validar Filtros
        When eu estiver em meus pedidos de matrícula Online1
        Then Verificação de filtros de matrícula não retornará exceção