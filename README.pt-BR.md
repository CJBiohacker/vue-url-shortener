# Web App Encurtador de URL

Este projeto, como o nome indica, é uma aplicação web para encurtar qualquer URL salva no banco de dados.
Ele pode ser usado para reduzir o tamanho dos caracteres do URL para facilitar o compartilhamento do link.
Este link curto e o ID do link gerado serão usados como referência para acessar a URL original.

# Tecnologias

| Tecnologia | Versão |
| ---------- | ------- |
| VueJS      | 3.3.11  |
| Vuetify    | 3.5.1   |
| Vite       | 5.0.8   |
| NodeJS     | 18.19.0 |
| Express    | 4.18.2  |
| MongoDB    | 6.3.0   |

# Pré-requisitos e Instalação

- Baixe ou defina a versão do NodeJS para qualquer versão entre 16.17.0 e LTS (use o [Node Version Manager](https://github.com/nvm-sh/nvm) para instalar a versão correta)
- Clone este repositório.
- Abra o terminal bash no repositório, altere o caminho do diretório para `/BackEnd` e execute o comando `npm i` ou `npm install` para instalar todos os pacotes BackEnd.
- Altere o caminho do diretório para `/FrontEnd` e execute o comando `yarn` ou `yarn install` para instalar todos os pacotes FrontEnd.
- Após tudo instalado, inicie o servidor local executando o comando `npm run server` no caminho `/BackEnd`.
- Em seguida, inicie a aplicação Web executando o comando `yarn dev` no caminho `/FrontEnd/vue-url-shortener`.

# Estrutura de Diretórios

```txt

+---BackEnd
|   +---src
|   |   +---common
|   |       utils.js
|   |   +---database
|   |       db-config.js
|   |   +---models
|   |       url-model.js
|   |   +---services
|   |       url.service.js
|   .env (file created by the developer)
|   index.js
|   package.json
|   package-lock.json
+---FrontEnd
|   +---vue-url-shortener
|   |   +---src
|   |   +---components
|   |   +---helpers
|   |   +---plugins
|   |   +---services
|   |   +---styles
|   |   App.vue
|   |   main.js
|   .eslintrc.js
|   .gitignore
|   .jsconfig.json
|   index.html
|   package.json
|   vite.config.js
|   yarn.lock

```

# Como o Projeto funciona

Este projeto está estruturado em algo tão próximo quanto o padrão de design de software MVC.<br>
Com as partes Controller e Model no caminho `/BackEnd`, e a parte View na pasta `/FrontEnd`.
O Controller está localizado no caminho `/BackEnd/src/services` contendo as principais funções que executam um CRUD básico no Banco de Dados NoSQL.
As rotas são todas definidas no caminho `/BackEnd/index.js` que será especificado na seção <a href="#restApi" >`Instruções da REST API`</a>.

Você precisará criar uma conexão de banco de dados MongoDB (tente a [documentação oficial](https://www.mongodb.com/docs/atlas/getting-started/)) e crie um arquivo `.env` no caminho do diretório para `/BackEnd`. Neste arquivo, você precisa definir estas variáveis de ambiente:

#### Exemplo:

```js
    PORT=1234
    HOST=localhost
    CLIENT_URL="http://localhost:<mesmo número da porta usada no FrontEnd>:"
    MONGO_DB_USERNAME="testUser"
    MONGO_DB_PASSWORD="12345678"
    MONGO_DB_DATABASE="mongoTest"
    MONGO_DB_COLLECTION="collTest"
    MONGO_DB_URI="mongodb+srv://{username}:{password}@mongotestdb.abcdsz.mongodb.net/?retryWrites=true&w=majority"
```

#### Observações:

No `MONGO_DB_URI` você deve ter cuidado ao passar o link de conexão do seu Mongo Driver para não expor seu nome de usuário e senha reais.
Ele precisa seguir exatamente o formato especificado acima, pois será substituído na seção de código `/BackEnd/src/database/db-config.js` abaixo:

```js
    const user = encodeURIComponent(process.env.MONGO_DB_USERNAME);
    const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);

    let URI = process.env.MONGO_DB_URI;
    URI = URI.replace("{username}", user);
    URI = URI.replace("{password}", password);
```

Para resolver problemas de CORS ao solicitar o servidor, precisamos adicionar no arquivo `vite.config.js` um proxy para evitar problemas de concatenação de URL.
Portanto, lembre-se de especificar a URL do seu servidor no arquivo `FrontEnd/vue-url-shortener/vite.config.js` no atributo `server.proxy.target` contido dentro da função `defineConfig`, conforme mostrado no código abaixo:

```js
export default defineConfig({
    ...
    ...
    ...
    ,
    server: {
        port: 4321,
        proxy: {
            "/api": {
            target: "<same URL as your backend server>",
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
```

<h1 id="restApi" >Instruções da REST API</h1>

| Método HTTP | Endpoint         | Parâmetros                                         | Descrição                                               |
| ------------ | ---------------- | --------------------------------------------------- | --------------------------------------------------------- |
| `GET`      | `/:shortUrlId` | `shortUrlId: String`                              | Requisição para buscar uma url encurtada através do id |
| `GET`(ALL) | `/all`         | `Nenhum`                                          | Requisição para buscar todas urls encurtadas            |
| `POST`     | `/url`         | `longURL: String`                                 | Requisição para adicionar uma nova url encurtada        |
| `DELETE`   | `/:shortUrlId` | `shortUrlId: String`                              | Requisição para deletar uma url encurtada existente     |
| `PUT`      | `/:shortUrlId` | `shortUrlId: String` <br> `longURL: String` | Requisição para atualizar uma url encurtada existente   |
