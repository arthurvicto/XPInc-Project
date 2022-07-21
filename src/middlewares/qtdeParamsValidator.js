module.exports = async (req, res, next) => {
  const { qtde } = req.body;
  if (qtde <= 0) {
    return res.status(400).json({
      message: 'A quantidade deve ser maior que zero',
    });
  }
  if (qtde === undefined || qtde === null || !qtde) {
    return res.status(400).json({
      message: 'A quantidade deve ser informada',
    });
  }
  if (typeof qtde !== 'number') {
    return res.status(400).json({
      message: 'A quantidade deve ser um número',
    });
  }

  return next();
};
