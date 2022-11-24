# Desafio técnico Tippoke

-----

## Objetivo

O objetivo dessa aplicação é o desenvolvimento de uma API REST capaz de criar comentários para um pokémon e conseguir buscar uma lista de comentários, além de, poder filtrar os comentários pelo nome do pokémon e ter paginação. Para isso, foras utilizadas as ferramentas Node.Js, Express, TypeScript, Prisma e Postgres.

----

### Ferramentas necessárias

- [Visual Studio Code](https://code.visualstudio.com/download) - para melhor visualização do código (opcional)
- [Git](https://git-scm.com/downloads) - para clonar esse repositório
- [Node.js](https://nodejs.org/en/download/) - para instalar os pacotes de dependência
- [PostgreSQL](https://www.postgresql.org/download/) - para armazenar os dados da aplicação
- [Docker](https://www.docker.com/products/docker-desktop/) - alternativa para rodar o banco de dados


----

### Passo a passo para a inicialização

1. Abra essa pasta no seu terminal ou no VSCode
    - Rode o comando `npm i` para instalar as dependências
2. Rode o servidor do PostegSQL em sua máquina ou com docker
    - Para rodar no docker utilize o comando: `docker-compose up -d`
    - Você pode alterar os dados do servidor no arquivo docker-compose.yml
3. Execute o prisma
    - Crie um arquivo .env ou renomei o arquivo .env.example
        - Mude as variáveis de ambiente de acordo se alterou no arquivo docker-compose ou se a porta estiver ocupada
    - Execute o comando `npx prisma migrate dev`
4. Rodando o servidor localmente
    - `npm run dev` para iniciar o servidor. Não feche este terminal para que o servidor continue rodando.

---

### Rotas
Existem duas rotas no projeto:
* POST/commentary - rota para adicionar um comentário
    - Modelo do body: `{
	"username": "teus",
  "email": "teus@gmail.com",
        "description": "ja enjoei",
        "pokemonName": "pikachu"
}`
* GET/commentary - rota para buscar todos os comentários
    - Utilize a urlParam 'pokemonName' para filtrar por nome ou letra
    - Utilize a urlParam 'page' para usar a paginação

---

### Testes
A aplicação possui testes automatizados no backend utilizando as libs mocha, chai, sinon e chai-http.

Para rodar os testes:
- Rode o comando `npm test`
- Para saber a coebrtura dos testes `npm run coverage`

---

### Deploy

Você também pode acessar a API pelo seguinte [link](https://tippoke-backend.up.railway.app/commentary)

----

Qualquer coisa, entre em contato pelo email: matheuscarretta@gmail.com
