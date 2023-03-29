Feature: Cadastrar certidão para CRI

    Background:
        Given eu acesse a página inicial e que eu acesse o menu <Novo Pedido>
    Scenario: Sucesso na solicitação de um eprotocolo CRI
        When eu submeter dados obrigatórios
        Then o pedido será enviado para a central

    Scenario: Não preencher dados no cadastro de certidão CRI
        When eu não preencher dados obrigatórios
        Then retornará erro na página  

    Scenario: Preencher somente tipo de certidão CRI
        When eu somente preencher tipo de certidão
        Then retornará "Selecione um tipo de entrega" na página

    Scenario: Validar nome e CPF/CNPJ não informado
        When eu não preencher nome e CPF
        Then retornará "Campo obrigatório!" em ambos campos

    Scenario: Validação de colunas
        When eu estiver em meus pedidos de certidão
        Then Verificação de colunas não retornará exceção em certidão


    Scenario: Validação de Filtros
        When eu estiver em meus pedidos de certidão!
        Then Verificação de filtros não retornará exceção!


    
