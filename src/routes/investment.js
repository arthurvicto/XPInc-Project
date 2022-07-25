const express = require('express');
const investment = require('../controllers/investment');
const bankAssetsValidator = require('../middlewares/bankAssetsValidator');
const clientWalletValidator = require('../middlewares/clientWalletValidator');
const quantityOfAssetsOnWallet = require('../middlewares/assetsQuantityOnWallet');
const idWalletValidator = require('../middlewares/idWalletValidator');
const idAssetValidator = require('../middlewares/idAssetValidator');
const qtdeParamsValidator = require('../middlewares/qtdeParamsValidator');
const tokenAuth = require('../middlewares/tokenAuth');
const authTokenTransactions = require('../middlewares/authTokenTransactions');

const router = express.Router();

/**
 * @swagger
 *  tags:
 *     name: investimento
 *     description: Endpoints de transação de ações do clientes
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      investimento:
 *        type: object
 *        required:
 *          - idWallet
 *          - idAsset
 *          - qtde
 *        properties:
 *           idWallet:
 *              type: integer
 *              description: cod carteira do cliente
 *           idAsset:
 *              type: integer
 *              description: cod ação
 *           qtde:
 *              type: integer
 *              description: quantidade de ações
 *        example:
 *          idWallet: 24
 *          idAsset: 4
 *          qtde: 5
 */

/**
 * @swagger
 *  /investimento/comprar:
 *          post:
 *            tags: [investimento]
 *            description: Realiza compra de ações
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
 *                     $ref: '#/components/schemas/investimento'
 */

router.post(
  '/comprar',
  tokenAuth,
  idWalletValidator,
  authTokenTransactions,
  idAssetValidator,
  qtdeParamsValidator,
  bankAssetsValidator,
  clientWalletValidator,
  investment.buyAssets,
);

/**
 * @swagger
 *  /investimento/vender:
 *          post:
 *            tags: [investimento]
 *            description: Realiza venda de ações
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
 *                     $ref: '#/components/schemas/investimento'
 */

router.post(
  '/vender',
  tokenAuth,
  idWalletValidator,
  authTokenTransactions,
  idAssetValidator,
  qtdeParamsValidator,
  quantityOfAssetsOnWallet,
  investment.sellAssets,
);

module.exports = router;
