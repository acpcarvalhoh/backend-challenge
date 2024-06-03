```markdown
# Projeto NestJS de catálogo de filmes com Autenticação JWT

Este é um projeto NestJS com autenticação JWT para gerenciar usuários e filmes.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
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
   JWT_SECRET=sua-chave-secreta-para-o-jwt
   ```

4. Execute o projeto:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints

- `POST /auth/signup`: Cria um novo usuário. Envie um corpo JSON com `name`, `email` e `password`.
- `POST /auth/login`: Faz login e retorna um token JWT. Envie um corpo JSON com `email` e `password`.
- `GET /movies`: Retorna todos os filmes.
- `GET /movies/:id`: Retorna um filme específico pelo ID.
- `POST /movies`: Cria um novo filme. Envie um corpo JSON com `title`, `description` e `year`.
- `PUT /movies/:id`: Atualiza um filme existente pelo ID. Envie um corpo JSON com os campos a serem atualizados.
- `DELETE /movies/:id`: Exclui um filme pelo ID.

## Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- JWT
- Swagger


## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

