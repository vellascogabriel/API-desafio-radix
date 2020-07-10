# API de um aplicativo de exercícios físicos

### Uma API desenvolvida, temos um sistema de autenticação de usuários com Login e senha, onde o usuário é capaz de criar um exercício de caminhada, corrida, escalada ou aeróbica, especificados respectivamente pelos números 0, 1, 2 e 3.

#### As tecnologias utilizadas no desenvolvimento dessa API são
- expressJS
- dotenv
- jsonwebtoken
- sequelize
- bcryptjs
- mysql2
- sucrase
- yup

## Configurando a Aplicação

- Para iniciar os testes da API, precisamos primeiro instalar as dependências do projeto. Abra o terminal no diretório do projeto e digite a linha de comando a seguir
```
yarn install
```
 - Após o término da instalação das dependências, iremos construir o banco de dados da aplicação. Para isso, crie um arquivo de nome '.env' na pasta raiz do projeto e copie o conteúdo do arquivo '.env.example' e preencha com as configurações do banco de dados mysql da sua máquina.
```
DB_HOST= Digite o host.
DB_USER= Digite o seu nome do usuário do banco de dados.
DB_PASS= Digite a senha do usuário.
DB_NAME= Digite o nome do banco de dados que será utilizado.
```

 - Depois de configurar o banco de dados, vamos construir as tabelas do banco de dados da aplicação. Para isso iremos utilizar o sequelize com o seguinte comando.
```
yarn sequelize db:migrate
```
Após a construção das tabelas da aplicação, podemos iniciar os testes utilizando o cliente HTTP de sua preferência como por exemplo o Postman, Insomnia entre outros.

- Para iniciar aplicação execute a seguinte linha de comando com terminal aberto no diretório do projeto:
```
yarn dev
```
Depois de iniciada a aplicação, podemos efetuar os devidos testes na API

###  Criando usuário, efetuando login e modificando dados do usuário.
 - Primeiro de tudo deveremos iniciar os teste criando um usuário e com nome, email e senha em um formato JSON como no exemplo abaixo:
```
{
	"name":"Jose",
	"email":"jose@email.com",
	"password":"123456"
}
```
A url de criação de usuário é o método POST em  localhost:3333/users

 - Após a criação de usuário, podemos iniciar uma sessão através do método POST da url localhost:3333/sessions
enviando o email e a senha do usuário criado via JSON como no exemplo a seguir:
```
{
	"email":"jose@email.com",
	"password":"123456"
}
```

 - Como resposta, será retornado alguns dados do usuário e uma token de autenticação jwt, que deverá ser inserida na variável de ambiente do cliente HTTP que está sendo utilizado. 

Abaixo segue um exemplo da resposta que será obtida após iniciar uma sessão
```
{
  "user": {
    "id": 1,
    "name": "Jose",
    "email": "jose@email.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk0Mzg1NTM5LCJleHAiOjE1OTQ5OTAzMzl9.vXqmhJGNLVq3wSi_nwVSYnMjBoDjX4azBuFWe14F43g"
}
```
Essa token opera como middleware de autenticação para as operações do usuário.

 - Com o método PUT na url 'localhost:3333/users' podemos modificar algum dado do usuário de acordo com o seguinte formato JSON

```
{
	"name":"Jose",
	"email":"jose@email.com",
	"oldPassword":"123456",
	"password":"654321"
}
```

### Criando exercícios, Listando exercícios e Deletando-os.

Na aplicação existem 4 tipos de exercício, cada um deles especificado por um número.

0 - caminhada
1 - corrida
2 - escalada
3 - aeróbica

Para criar um exercício, basta fazer o método POST na url 'localhost:3333/exercises' informando qual tipo de exercício é desejado no corpo da requisição pelo objeto JSON a seguir
```
{
	"exercise_type":"0"
}
```

A listagem de exercícios é feita baseado no tipo de exercício.
Para isso, faça o método GET na url 'localhost:3333/exercises/:type' e no lugar de :type escolha um número referente ao tipo de exercício.

Para deletar um exercício, basta realizar o método DELETE na url  'localhost:3333/exercises/:id' onde :id ficará o id do exercício que se deseja excluir.
