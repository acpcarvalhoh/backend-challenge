
---

# API de Catálogo de Filmes com Autenticação JWT

![Estrutura do banco de dados](src/assets/draw-table.png)

Esta é uma API construída com NestJS para gerenciar usuários e filmes com autenticação JWT.

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

- **POST /users**: Cria um novo usuário na base de dados.
  - **Payload:**
    ```json
    {
      "name": "João Silva",
      "email": "joao.silva@example.com",
      "password": "senha123"
    }
    ```

- **POST /auth/login**: Responsável por logar o usuário na aplicação gerando um token para o mesmo usar futuramente nas suas requisições.
  - **Payload:**
    ```json
    {
      "email": "joao.silva@example.com",
      "password": "senha123"
    }
    ```

### Filmes

- **POST /movies**: Cria um novo filme para o catálogo.
  - **Payload:**
    ```json
    {
      "title": "Inception",
      "genre": "Sci-Fi",
      "director": "Christopher Nolan",
      "releaseYear": 2010,
      "rating": 8.8
    }
    ```
  - **Nota:** Os campos "genre", "director", "releaseYear" e "rating" são opcionais.

- **PUT /movies/:id**: Atualiza dados de um filme existente.
  - **Payload:**
    ```json
    {
      "title": "Inception",
      "genre": "Sci-Fi",
      "director": "Christopher Nolan",
      "releaseYear": 2010,
      "rating": 8.8
    }
    ```

- **GET /movies**: Lista todos os filmes cadastrados.

- **GET /movies/:id**: Retorna informações detalhadas sobre um filme específico.

- **DELETE /movies/:id**: Exclui um filme específico.

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

   ```env
   DATABASE_URL=sua-url-de-conexao-do-banco-de-dados
   NODE_ENV=development
   DATABASE_USERNAME=seu-usuario
   DATABASE_PASSWORD=sua-senha
   DATABASE_PORT=5432
   DATABASE_NAME=nome-do-banco
   JWT_SECRET_KEY=sua-chave-secreta-para-o-jwt
   PORT=3000
   ```

4. Use o arquivo `docker-compose.yml` para subir o container com o banco de dados PostgreSQL:

   ```bash
   docker-compose up -d
   ```

5. Execute o projeto:

   - **Modo produção:**
     ```bash
     npm run start:prod
     ```

   - **Modo desenvolvimento com watch:**
     ```bash
     npm run start:dev
     ```

   - **Modo desenvolvimento:**
     ```bash
     npm run start
     ```

## Testes

Para executar os testes, use os seguintes comandos:

- **Unit tests:**
  ```bash
  npm run test
  ```

- **e2e tests:**
  ```bash
  npm run test:e2e
  ```

- **Test coverage:**
  ```bash
  npm run test:cov
  ```

## Banco de Dados

A API utiliza o banco de dados PostgreSQL para armazenar as informações. As tabelas criadas são:

- **Tabela "users"**: Armazena informações dos usuários, como nome, e-mail, senha.
- **Tabela "movies"**: Armazena dados dos filmes do catálogo, incluindo título, gênero, ano de lançamento, diretor, avaliação e ID do usuário como chave estrangeira.

## Autor

Este projeto foi desenvolvido por Adão Carvalho. Aqui estão algumas informações sobre o autor:

- **Nome**: Adão Carvalho
- **Descrição**: Sou um desenvolvedor de software apaixonado por tecnologia e programação. Tenho experiência no desenvolvimento de aplicações web e estou sempre buscando aprender novas tecnologias. Este projeto foi criado como parte do meu aprendizado e prática de desenvolvimento de APIs.
- **Contato**: Você pode entrar em contato comigo pelo e-mail carvalhohuzumak@gmail.com.
- **Perfil**: Você pode encontrar mais projetos e trabalhos no meu perfil do GitHub: [acpcarvalhoh](https://github.com/acpcarvalhoh)

Sinta-se à vontade para entrar em contato comigo para mais informações sobre o projeto ou para qualquer outra questão relacionada.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---