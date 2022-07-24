const express = require('express');
const newWallet = require('../controllers/createWallet');
const createWalletValidator = require('../middlewares/createWalletValidator');
const tokenAuth = require('../middlewares/tokenAuth');

const router = express.Router();

/**
 * @swagger
 *  tags:
 *     name: criarCarteira
 *     description: Endpoints de criação de carteira de clientes
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      criarCarteira:
 *        type: object
 *        required:
 *          - idClient
 *        properties:
 *           idClient:
 *              type: integer
 *              description: código do cliente
 *        example:
 *          idClient: 4
 */

/**
 * @swagger
 * /criarCarteira:
 *          post:
 *            tags: [criarCarteira]
 *            description: Cria uma nova carteira para o cliente
 *            security:
 *             - bearerAuth: []
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
 *                     $ref: '#/components/schemas/criarCarteira'
 */

router.post(
  '/',
  tokenAuth,
  createWalletValidator,

  newWallet.newWallet,
);

module.exports = router;
