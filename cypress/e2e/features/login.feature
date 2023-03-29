Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given que eu esteja na tela de login
    Scenario: Sucesso Login
        When Um usuário submeter o login e a senha, e clicar no botão de login
        Then Validade the title after login

    Scenario: Incorrect Username Login
        When Um usuário submeter o login incorreto e a senha correta, e clicar no botão de login
        Then Validar a mensagem de erro de login

    Scenario: Incorrect Password Login
        When Um usuário submeter o login  correto e a senha incorreta, e clicar no botão de login
        Then Validar a mensagem de erro de login!

    Scenario: Incorrect Password and Login
        When Um usuário submeter o login e a senha incorretos, e clicar no botão de login
        Then Validar a mensagem de erro de login!!