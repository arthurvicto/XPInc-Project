const sinon = require('sinon');
const { expect } = require('chai');
const { clientBalance } = require('../../../controllers/wallet');
const clientWallet = require('../../../services/wallet')

const connection = require('../../../models/connections');

describe('Visualiza o saldo do cliente com a chamada clientBalance do controller', () => {
    describe('testando a função clientBalance', () => {

    const res = {};
    const req = {};

      const result =
        {
          idWallet: 1,
          idClient: 1,
          balance: '0',
        };

     before(async () => {
    req.params = { idWallet: 1 };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(clientWallet, 'walletById').resolves(result);
    });
    after(async () => { clientWallet.walletById.restore(); });

    it ('Verifica se retorna status 200', async () => {
      await clientBalance(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);

  });
});
});