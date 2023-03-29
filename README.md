# Automacao cypress 10

<p>Projeto criado para automação de casos de teste do portal web Cliente Privado.</p>
<b> Testes criado utilizando  cucumber e entendo que isto não é necessário para o Cypress, devido seus cenários serem criados a partir do it (2023). <b>
  

## Ferramentas utilizadas

- Node.js
- Cypress 10

## Preparação do ambiente
Para rodar o projeto, utlize a IDE que você mais se identifique **(no meu caso, utilizei o Visual Studio Code)**, em
seguida, utilize os comandos abaixo para rodar os testes:

`npx cypress open`: para rodar os testes no modo visual, abrindo a telinha do Cypress;<br>
`npx cypress run`: para rodar os testes no navegador padrão do Cypress (Electron);<br>
`npx cypress run -b edge`: para rodar os testes no navegador Edge, da Microsoft; <br>
`npx cypress run -b firefox`: para rodar os testes no navegador Firefox, da Mozilla;<br>
`npx cypress run -b chrome`: para rodar os testes no navegador Chrome, do Google; <br>

**Observação:**

Caso deseje rodar os testes com qualquer navegador que não seja o Electron, deve,
primeiramente, instalar os navegadores em questão. Outro ponto importante é a necessidade de rodar o comando `npm install` 
para instalar as dependências e módulos do projeto.

**Arquivos e diretórios:**

- /cypress/e2e/features
  Diretório que contém os casos de teste escritos;
  
- /cypress/e2e/ste_definitions
   Diretório que contém os stes  para execução dos testes
   
- /cypress/pages
    Diretório onde é dada ação do elemento com base na página
    
    


## Links e documentações úteis.

- [Documentação oficial do Cypress](https://www.cypress.io/)
- [Documentação do novo Cypress 10](https://www.cypress.io/blog/2022/06/01/cypress-10-release/)

Desenvolvido por Mateus Neres - 2022
