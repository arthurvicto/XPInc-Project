const express = require('express');
const newUser = require('../controllers/signUp');
const signUpValidator = require('../middlewares/signUpValidator');

const router = express.Router();

/**
 * @swagger
 *  tags:
 *     name: cadastro
 *     description: Endpoints de cadastro de clientes do Banco XPInc
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      cadastro:
 *        type: object
 *        required:
 *          - name
 *          - email
 *          - password
 *        properties:
 *           name:
 *              type: string
 *              description: nome do cliente com mais de 3 caracteres
 *           email:
 *              type: string
 *              description: email precisa ser válido
 *           password:
 *              type: string
 *              description: senha precisa ter pelo menos 6 caracteres
 *        example:
 *          name: "arthur"
 *          email: "arthur@hotmail.com"
 *          value: "123456"
 */

/**
 * @swagger
 * /cadastro:
 *          post:
 *            tags: [cadastro]
 *            description: faz cadastro do cliente
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
 *                     $ref: '#/components/schemas/cadastro'
 */

router.post(
  '/',
  signUpValidator,
  newUser.createUser,
);

module.exports = router;
