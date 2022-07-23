const sinon = require('sinon');
const { expect } = require('chai');
const assets = require('../../../controllers/assets');
const assetsFromServices = require('../../../services/assets');

describe('Testa se retorna a rota com todos os Assets na corretoa com a função allAssetsFromServices do controller', () => {
    describe('testando a função allAssetsFromServices', () => {

    const res = {};
    const req = {};

      const result = [ 
    {
        "idAsset": 1,
        "name": "AZUL4",
        "qtde": 9999,
        "value": "350.00"
    },
    {
        "idAsset": 2,
        "name": "PETR4",
        "qtde": 9996,
        "value": "350.00"
    }
    ];

     before(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(assetsFromServices, 'allAssets').resolves(result);
    });
    after(async () => { assetsFromServices.allAssets.restore(); });

    it ('Verifica se retorna status 200', async () => {
      await assets.allAssetsFromServices(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);

  });
});
});

describe('Retorna o ativo pelo id com a função getAssetById do controllers', () => {
    describe('testando a função getAssetById', () => {

    const res = {};
    const req = {};

      const result = 
    {
        "idAsset": 1,
        "name": "AZUL4",
        "qtde": 9999,
        "value": "350.00"
    }

     before(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(assetsFromServices, 'assetsById').resolves(result);
    });
    after(async () => { assetsFromServices.assetsById.restore(); });

    it ('Verifica se retorna status 200', async () => {
      await assets.allAssetsFromServices(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);

  });
});
});