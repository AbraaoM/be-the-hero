const express  = require('express')
const cors = require('cors')  //Biblioteca que faz as rotas de acesso url
const routes = require('./routes')

const app = express(); //Utilizado pra envio e recebimento de requisições HTTP

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3333)
/**
 * Rota / Recurso
 */

/**
* Métodos HTTP:
* 
* Get: Buscar/listar uma informação do back-end
* POST: Criar uma informação do back-end
* PUT: Alterar uma informação
* DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Querry: Parametros nomeados enviados na rota após o símbolo "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
* npm install nodemon -D
* Utilizar -D para instalar uma dependecia de desenvolvimento
* Este pacote será responsável pela atualização em tempo real da aplicação
* 
* deve ser configurado no arquivo package.json, na seção script adicionar a linha "start": "nodemon index.js"
* Agora é possivel utilizar o comando npm start para executar a aplicação, já com o nodemon
*/

/**
 * SQL: MySQL, **SQLite**, PostgreSQL, Oracle, Microsoft SQL server
 * NoSQL: MongoDB, CouchDB
 */

/**
* Driver: SELECT * FROM users
* Query Builder: table('users'), select('*'). where()
* 
* Usaremos o Knex como Query builder para o SQlite
*/

/**
 * Estrutura do banco de dados
 * Entidades:
 *  - Ong
 *  - Caso (incident)
 * 
 * Funcionalidades:
 *  - Login de ong
 *  - Cadastro de ong
 *  - Logout de ong
 *  - Cadatrar novos casos
 *  - Deletar casos
 *  - Lista casos específicos de uma ong
 *  - Listar todos os casos
 *  - Entrar em contato com a ong(whatsapp e e-mail)
 */

 /**
  * Utilizar migrations do knex:
  * npx knex migrate:make create_ongs
  * 
  * Nessa migration criada, vamos utilizar a API do knex para criar as tabelas do bd
  */
 

