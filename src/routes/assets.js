const express = require('express');
const assets = require('../controllers/assets');
const idAsset = require('../middlewares/idAsset');
const assetsOnBank = require('../middlewares/assetsOnBank');

const router = express.Router();

/**
 * @swagger
 *  tags:
 *     name: ativos
 *     description: Endpoints de ativos do Banco XPInc
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      ativos:
 *        type: object
 *        required:
 *          - idAsset
 *        properties:
 *           idAsset:
 *              type: integer
 *              description: ID do ativo
 *           name:
 *              type: string
 *              description: Nome do ativo
 *           value:
 *              type: string
 *              description: Preço do ativo
 *           qtde:
 *              type: integer
 *              description: Quantidade do ativo
 *        example:
 *          idAsset: 4
 *          name: "AZUL4"
 *          qtde: 9976
 *          value: "350,00"
 */

/**
 * @swagger
 * /ativos:
 *      get:
 *        tags: [ativos]
 *        description: Retorna todos os ativos do Banco XPInc
 *        responses:
 *          200:
 *            content:
 *               application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                         $ref: '#/components/schemas/ativos'
 */
router.get(
  '/',
  assetsOnBank,
  assets.allAssetsFromServices,
);

/**
 * @swagger
 * /ativos/{idAsset}:
 *                get:
 *                  tags: [ativos]
 *                  description: Retorna um ativo por idAsset
 *                  parameters:
 *                    - in: path
 *                      name: idAsset
 *                      type: integer
 *                      required: true
 *                  responses:
 *                    200:
 *                      content:
 *                        application/json:
 *                          schema:
 *                           type: object
 *                           $ref: '#/components/schemas/ativos'
 */

router.get(
  '/:idAsset',
  assetsOnBank,
  idAsset,
  assets.assetsById,
);

module.exports = router;
