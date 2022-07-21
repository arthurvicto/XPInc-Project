module.exports = (req, res, next) => {
  const { value } = req.body;
  if (value <= 0) {
    return res.status(400).json({
      message: 'O valor deve ser maior que zero',
    });
  }
  if (value === undefined || value === null || !value) {
    return res.status(400).json({
      message: 'O valor deve ser informado',
    });
  }
  return next();
};
