# Projeto base em Node.js com Autenticação JWT, Sequelize e Documentação Swagger
Este projeto é uma API RESTful construída com Node.js e Express, utilizando Sequelize como ORM para interação com o banco de dados e JSON Web Tokens (JWT) para autenticação de usuários. A documentação da API é gerada automaticamente com o Swagger (OpenAPI).

# Recursos
### Autenticação JWT:

Os usuários podem se autenticar fornecendo suas credenciais (email e senha).
Um token JWT é gerado após a autenticação bem-sucedida e deve ser incluído no cabeçalho Authorization das requisições para acessar as rotas protegidas.

### Sequelize:
O Sequelize é um ORM (Object-Relational Mapping) que facilita a interação com o banco de dados.
O modelo User é definido para representar os usuários no banco de dados.
As operações de CRUD (criar, ler, atualizar e deletar) são realizadas através do Sequelize.

### Swagger (OpenAPI):
A documentação da API é gerada automaticamente com o Swagger (OpenAPI).
A documentação inclui informações sobre os endpoints, métodos HTTP, parâmetros, respostas e modelos de dados.
A interface do Swagger UI permite testar os endpoints diretamente da documentação.

## Estrutura do projeto
```
projeto-backend/ 
├── src/
│   ├── config/          # Configurações (banco de dados, Swagger, etc.)
│   ├── controllers/     # Lógica de controle das rotas
│   ├── middlewares/     # Middlewares (autenticação, etc.)
│   ├── models/          # Modelos de dados (Sequelize)
│   ├── routes/          # Definição das rotas da API
│   └── app.js           # Ponto de entrada da aplicação
├── ... (outros arquivos e pastas)
```

## Tecnologias Utilizadas
- Node.js: Ambiente de execução JavaScript.
- Express: Framework web para Node.js.
- Sequelize: ORM para Node.js.
- MySQL (ou outro banco de dados): Banco de dados relacional.
- jsonwebtoken: Biblioteca para trabalhar com JWTs.
- swagger-jsdoc: Gera a documentação OpenAPI a partir de comentários JSDoc.
- swagger-ui-express: Serve a interface do Swagger UI.
- bcrypt: Biblioteca para hash de senhas.
- dotenv: Carrega variáveis de ambiente de um arquivo .env.

# Como executar o projeto
### Clone o repositório:
```
Bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

## Instale as dependências:
```
Bash
npm install
```

## Configure o banco de dados:
Crie um banco de dados MySQL (ou outro banco de dados de sua escolha). 
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente de acordo com o seu ambiente (desenvolvimento ou produção).
```
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
JWT_SECRET=sua_chave_secreta
```
## Inicie o servidor:
```
Bash
npm start
```

## Acesse a documentação:
Abra o navegador e acesse http://localhost:3000/api-docs (ou a porta que você configurou) para visualizar a documentação da API no Swagger UI.

## Rotas da API
- [x]  POST /login: Autentica um usuário e retorna um token JWT.
- [x]  GET /users: Retorna a lista de usuários (requer autenticação).
- [x]  GET /users/:id: Retorna um usuário pelo ID (requer autenticação).