const express = require('express');
const assets = require('../controllers/assets');

const router = express.Router();

router.get('/', assets.allAssetsFromServices);
router.get('/:idAsset', assets.assetsById);

module.exports = router;
