const Product = require('../models/Product');

async function getProducts(req, res, next) {
  try {
    const search = req.query.search || '';
    const userId = req.user ? req.user._id : null;

    const products = await Product.findGlobalAndUserProducts(userId, search);

    res.json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts,
};
