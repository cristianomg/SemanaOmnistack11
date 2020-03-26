const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(express.json())
app.use(cors());
app.use(routes);

app.listen(3333);

/*
 * Métodos HTTP:
    *
    * GET : Buscar uma informação do back-end
    * POST: Criar uma informação no back-end
    * PUT: Alterar uma informção no back-end
    * DELETE : Deletar uma informação no back-end
*/

/*
    *Tipos de parâmetros:
    *
    * Query Params: Parâmetros nomeados enviados na rota após *?*  (Filtros, Paginação)  -- request.query
    * Route Params: Parâmetros utilizados para identificar recursos  (router/:param)  -- request.params
    * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos -- request.body
*/

/**
 * SQL : MySql, SQLite,  PostgreSql, Oracle, MS SQl Server
 * NoSql : MongoDB, CouchDb, etc
 */
/**
 * Forma de comunicação com banco
 * Driver : Select * from users
 * Query Builder: table('user').select('*').where() ---- utilizado knexjs
 *
 */

/**
 * Entidades:
   * Ong
   * Incidents
 */

/**
 * Funcionalidades:
  * Login de ONG
  * Cadastro de ONG
  * Logout de ONG
  * Cadastrar novos Casos
  * Deletar novos Casos
  * Listar Casos Existentes de uma ONG
  * Listar TODOS OS CASOS
  * ENTRAR EM CONTATO VIA WHATSAPP E EMAIL
 */

