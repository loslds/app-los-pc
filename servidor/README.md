COMO RODAR 0 PROJETO BAIXADO
Instalar todas as dependência indicadas pelo package.json
### rpm install

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package.json
### rpm init
obs.: automaticamente gera o arqivo package.json



Gerenciar as requisições , rotas e URLs, entre outras funcionabilidades

### npm install express
obs.: crie um arquivo na raiz do projeto com o nome: server.js e edite :

const express = require("express");
const server = express();

server.get('/', (req , res) => {
  res.send('Pagina Inicial');
});

server.get('/contato', (req , res) => {
  res.send('Pagina Contato');
});

server.listen(8080, ()=>{
  console.log('Servidor inicializado na porta 8080: http://localhost:8080')
} );

PARA RODAR O PROJETO
### node server.js
----------------------
 Para saber se esta rodando copia o Link acima e cola no navedador e execute.
 deve mostrar -> Pagina Inicial
 no console.log irá mostrar -> Servidor inicializado na porta 8080: http://localhost:8080 
 --------------------

TORNANDO MAIS PRATICO O SERVIÇO DE RESPOSTA NO NAVEGADOR
Instalar o modulo nodemon atraves do cmd para tornar global,
### npm install -g nodemon
reinicia o PC e apos ter aberto o code na pasta do projeto e instala o nodemon
### npm install --save-dev nodmon
depois de instalado o comando para rodar o projeto passa ser
### nodemon server.js
agora assim que atualize qualquer coisa no projeto, não mais precisará de parar o servidor para mudanças e ativar novamente... é só dar F5 e ele ja atualizou. 

INSTALAR BANCO DADOS MYSQL
Não deiche de anotar o USUARIO do MySQL e a PASSWORD
### USUARIO : root
### PASSWORD: 123456

CRIAÇÃO DO MODULO DE CONEXÃO COM BANCO DE DADOS
Selecione a raiz do projeto e crie uma pasta "models"
Selecione a pasta criada e crie o arquivo "db.js"

CONEXÃO COM BANCOS DE DADOS MYSQL
Para conectar com o banco de dados MySQL, instalar o "SEQUELIZE"
PARAR O SERVIÇO DO SERVIDOR COM "ctrl + C".
Sequelize é uma biblioteca JS que facilita o gerenciamento de um banco de dados SQL
### npm install --save sequelize

DRIVER DO MYSQL
Trabalhando com Banco de Dados do MySQL, se instala "mysql2"
### npm install --save mysql2

