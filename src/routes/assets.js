const express = require('express');
const assets = require('../controllers/assets');
const idAsset = require('../middlewares/idAsset');
const assetsOnBank = require('../middlewares/assetsOnBank');

const router = express.Router();

router.get(
  '/',
  assetsOnBank,
  assets.allAssetsFromServices,
);
router.get(
  '/:idAsset',
  assetsOnBank,
  idAsset,
  assets.assetsById,
);

module.exports = router;
