const sinon = require('sinon');
const { expect } = require('chai');
const { walletById } = require('../../../services/wallet');
const walletModels = require('../../../models/wallet');

describe('Visualiza o saldo do cliente com a chamada walletById do service', () => {
  describe('testando a função walletById', () => {
     before(async () => {
      const execute =
        {
          idWallet: 1,
          idClient: 1,
          balance: '0',
        };
      sinon.stub(walletModels, 'clientWalletById').resolves(execute);
    });
    after(async () => { walletModels.clientWalletById.restore(); });

    it ('Verifica se o retorno da função é um objeto', async () => {
      const response = await walletById(1);
      expect(response).to.be.an('object');
    
    });
     it ('Verifica se o objeto retornado contém as informações necessárias: ( idWallet, idClient, balance)', async () => {
      const response = await walletById(1);
      expect(response.idWallet).to.be.an('number');
      expect(response.idClient).to.be.an('number');
      expect(response.balance).to.be.an('string');
    });
     it('Verifica se o objeto não retornou vazio', async () => {
        const response = await walletById(1);
        expect(response).to.not.be.empty;;
      });
      it ('Verifica se o objeto tem as chaves: (idWallet, idClient e balance)', async () => {
        const response = await walletById(1);
        expect(response).to.have.all.keys('idWallet', 'idClient', 'balance');
        });
  });
});
