const express = require('express');
const clients = require('../controllers/clients');
const loginValidator = require('../middlewares/loginValidator');

const router = express.Router();

/**
 * @swagger
 *  tags:
 *     name: cliente
 *     description: Endpoints clientes do Banco XPInc
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      cliente:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *           email:
 *              type: string
 *              description: email precisa ser válido e cadastrado no banco
 *           password:
 *              type: string
 *              description: senha precisa estar cadastrada no banco
 *        example:
 *          email: "arthur@hotmail.com"
 *          password: "123456"
 */

/**
 * @swagger
 * /cliente:
 *      get:
 *        tags: [cliente]
 *        description: Retorna todos os clientes do Banco XPInc
 *        responses:
 *          200:
 *            content:
 *               application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                         $ref: '#/components/schemas/cliente'
 */

router.get(
  '/',
  clients.allClients,
);

/**
 * @swagger
 * /cliente/login:
 *          post:
 *            tags: [cliente]
 *            description: faz login do cliente
 *            requestBody:
 *                required: true
 *                content:
 *                 application/json:
 *                   schema:
 *                    type: object
 *            responses:
 *              200:
 *                content:
 *                  application/json:
 *                    schema:
 *                     type: object
 *                     $ref: '#/components/schemas/cliente'
 */

router.post(
  '/login',
  loginValidator,
  clients.login,
);

module.exports = router;
