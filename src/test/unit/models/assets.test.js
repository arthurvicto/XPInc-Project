const sinon = require('sinon');
const { expect } = require('chai');
const assets = require('../../../models/assets');


describe('Retorna todos os ativos da função getAllAssets do models', () => {
  describe('quando é realizado com sucesso', () => {
     before(async () => {
      const execute =[ 
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
      sinon.stub(assets, 'getAllAssets').resolves(execute);
    });
    after(async () => { assets.getAllAssets.restore(); });

    it ('Verifica se o retorno da função é um Array', async () => {
      const response = await assets.getAllAssets();
      expect(response).to.be.an('array');
    
    });
     it ('Verifica se o primeiro objeto do array retornado contém as informações necessárias: ( idAsset, name, qtde, value)', async () => {
      const response = await assets.getAllAssets();
      expect(response[0].idAsset).to.be.an('number');
      expect(response[0].name).to.be.an('string');
      expect(response[0].qtde).to.be.an('number');
      expect(response[0].value).to.be.an('string');
    });
     it('Verifica se o primeiro objeto não retornou vazio', async () => {
        const response = await assets.getAllAssets();
        expect(response[0]).to.not.be.empty;;
      });
      it ('Verifica se o primeiro objeto tem as chaves: ( idAsset, name, qtde, value)', async () => {
        const response = await assets.getAllAssets();
        expect(response[0]).to.have.all.keys('idAsset', 'name', 'qtde', 'value');
        });
  });
});

describe('Retorna o ativo pelo id com a função getAssetById do models', () => {
  describe('quando é realizado com sucesso', () => {
     before(async () => {
      const execute =
    {
        "idAsset": 1,
        "name": "AZUL4",
        "qtde": 9999,
        "value": "350.00"
    }
      sinon.stub(assets, 'getAssetById').resolves(execute);
    });
    after(async () => { assets.getAssetById.restore(); });

    it ('Verifica se o retorno da função é um objeto', async () => {
      const response = await assets.getAssetById(1);
      expect(response).to.be.an('object');
    
    });
     it ('Verifica se o objeto  retornado contém as informações necessárias: ( idAsset, name, qtde, value)', async () => {
      const response = await assets.getAssetById(1);
      expect(response.idAsset).to.be.an('number');
      expect(response.name).to.be.an('string');
      expect(response.qtde).to.be.an('number');
      expect(response.value).to.be.an('string');
    });
     it('Verifica se o objeto não retornou vazio', async () => {
        const response = await assets.getAssetById(1);
        expect(response).to.not.be.empty;;
      });
      it ('Verifica se o objeto tem as chaves: ( idAsset, name, qtde, value)', async () => {
        const response = await assets.getAssetById(1);
        expect(response).to.have.all.keys('idAsset', 'name', 'qtde', 'value');
        });
  });
});