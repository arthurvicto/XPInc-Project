const express = require('express');
const assets = require('../controllers/assets');
const idAsset = require('../middlewares/idAsset');
const assetsOnBank = require('../middlewares/assetsOnBank');
const tokenAuth = require('../middlewares/tokenAuth');

const router = express.Router();

router.get(
  '/',
  tokenAuth,
  assetsOnBank,
  assets.allAssetsFromServices,
);
router.get(
  '/:idAsset',
  tokenAuth,
  assetsOnBank,
  idAsset,
  assets.assetsById,
);

module.exports = router;
