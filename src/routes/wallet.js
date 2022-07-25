const express = require('express');
const wallet = require('../controllers/wallet');
const assets = require('../controllers/clientAssets');
const idWallet = require('../middlewares/idWallet');
const walletValidator = require('../middlewares/idWalletValidator');
const valueValidator = require('../middlewares/valueValidator');
const balanceForWithdraw = require('../middlewares/balanceForWithdraw');
const tokenAuth = require('../middlewares/tokenAuth');
const authTokenTransactions = require('../middlewares/authTokenTransactions');

const router = express.Router();

/**
 * @swagger
 *  tags:
 *     name: conta
 *     description: Endpoints de conta de clientes
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      conta:
 *        type: object
 *        required:
 *          - idWallet
 *          - value
 *        properties:
 *           idWallet:
 *              type: integer
 *              description: cod carteira do cliente
 *           value:
 *              type: string
 *              description: valor para deposito ou saque
 *        example:
 *          idWallet: 24
 *          value: 10000
 */

/**
 * @swagger
 *  /conta/{idWallet}:
 *                get:
 *                  tags: [conta]
 *                  description: Retorna a conta do cliente com saldo
 *                  security:
 *                   - bearerAuth: []
 *                  parameters:
 *                    - in: path
 *                      name: idWallet
 *                      type: integer
 *                      required: true
 *                  responses:
 *                    200:
 *                      content:
 *                        application/json:
 *                          schema:
 *                           type: object
 *                           $ref: '#/components/schemas/conta'
 */

router.get(
  '/:idWallet',
  tokenAuth,
  idWallet,
  wallet.clientBalance,
);

/**
 * @swagger
 *  /conta/deposito:
 *          post:
 *            tags: [conta]
 *            description: Realiza depósito na carteira para o cliente
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
 *                     $ref: '#/components/schemas/conta'
 */

router.post(
  '/deposito',
  tokenAuth,
  walletValidator,
  authTokenTransactions,
  valueValidator,
  wallet.deposit,
);

/**
 * @swagger
 *  /conta/saque:
 *          post:
 *            tags: [conta]
 *            description: Realiza saque na carteira para o cliente
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
 *                     $ref: '#/components/schemas/conta'
 */

router.post(
  '/saque',
  tokenAuth,
  walletValidator,
  authTokenTransactions,
  balanceForWithdraw,
  valueValidator,
  wallet.withdraw,
);

/**
 * @swagger
 *  /conta/ativos/{idWallet}:
 *                get:
 *                  tags: [conta]
 *                  description: Retorna a conta do cliente com os seus ativos
 *                  security:
 *                   - bearerAuth: []
 *                  parameters:
 *                    - in: path
 *                      name: idWallet
 *                      type: integer
 *                      required: true
 *                  responses:
 *                    200:
 *                      content:
 *                        application/json:
 *                          schema:
 *                           type: object
 *                           $ref: '#/components/schemas/conta'
 */

router.get(
  '/ativos/:idWallet',
  tokenAuth,
  idWallet,
  assets.clientAssets,
);

module.exports = router;
