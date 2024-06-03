# API de catálogo de filmes com Autenticação JWT
![Estrutura do bando de dados](src/assets/draw-table.png)

Esta é uma API construida com NestJS gerenciar usuários e filmes com autenticação JWT.

## Tecnologias Utilizadas

As principais tecnologias utilizadas no desenvolvimento desta API são:

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Docker
- JWT
- Swagger


## Endpoints

A API possui os seguintes endpoints:

### Usuários

- **POST /users**: Cria um novo usuário na base de dados. Requer os campos "name", "email" e "password" no corpo da requisição.

- **POST /auth/login**: Responsável por logar o usuário na aplicação gerando um token para o mesmo usar futuramente nas suas requisições. Requer os campos "email" e "password" no corpo da requisição.

### Movies

- **POST /movies**: Cria um  novo filme para o catálogo. Requer os campos  "title",  no corpo da requisição. Os campos "genre", "director", "releaseYear" e "rating" são opçionais.

- **PUT /movies/:id**: Atualiza dados de um filme existente. Requer o campo "id" como um parâmetro de rota.

- **GET /movies**: Lista todos os filmes cadastrados.

- **GET /movies/:id**: Retorna informações detalhadas sobre um filme específico. Requer o campo "id" como um parâmetro de rota..

- **DELETE /movies/:id**: Exclui um filme específico. Requer o campo "id" como um parâmetro de rota.


## Configuração do Projeto

1. Clone o repositório:

  ```bash
   git clone https://github.com/acpcarvalhoh/backend-challenge/
  ```
2. Instale as dependências:

   ```bash
   cd seu-projeto
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```
    DATABASE_URL=sua-url-de-conexao-do-banco-de-dados
    NODE_ENV=
    DATABASE_USERNAME=
    DATABASE_PASSAWORD=
    DATABASE_PORT=
    DATABASE_NAME=
    JWT_SECRET_KEY=sua-chave-secreta-para-o-jwt
    PORT=

  ```
  **Use o arquvo docker-compose.yml para subir container com o banco de dados PG**


4. Execute o projeto:
```
  # development
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run start:prod
```

## Test

```
  - unit tests
  $ npm run test

   - e2e tests
  $ npm run test:e2e

  - test coverage
  $ npm run test:cov
```

## Banco de Dados

A API utiliza o banco de dados PostgreSQL para armazenar as informações. As tabelas criadas são:

- Tabela "users": Armazena informações dos usuários, como nome, e-mail, senha".
- Tabela "movies": Armazena dados dos filmes do catalogo, incluindo título, genero, ano de lançamento, diretor, avaliação e ID do usuário como chave estrageira.

## Autor

Este projeto foi desenvolvido por Adão Carvalho. Aqui estão algumas informações sobre o autor:

- **Nome**: Adão Carvalho
- **Descrição**: Sou um desenvolvedor de software apaixonado por tecnologia e programação. Tenho experiência no desenvolvimento de aplicações web e estou sempre buscando aprender novas tecnologias. Este projeto foi criado como parte do meu aprendizado e prática de desenvolvimento de APIs.
- **Contato**: Você pode entrar em contato comigo pelo e-mail carvalhohuzumak@gmail.com.
- **Perfil**: Você pode encontrar mais projetos e trabalhos no meu perfil do GitHub: [acpcarvalhoh](https://github.com/acpcarvalhoh)

Sinta-se à vontade para entrar em contato comigo para mais informações sobre o projeto ou para qualquer outra questão relacionada.


## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.



