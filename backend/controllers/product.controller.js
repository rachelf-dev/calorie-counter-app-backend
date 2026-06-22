const Product = require('../models/Product');

async function getProducts(req, res, next) {
  try {
    const search = req.query.search || '';
    const userId = req.user.id;

    const products = await Product.findGlobalAndUserProducts(userId, search);

    res.json(products);
  } catch (error) {
    next(error);
  }
}

async function getMyProducts(req, res, next) {
  try {
    const products = await Product.find({ createdBy: req.user.id }).sort({ name: 1 });

    res.json(products);
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
  try {
    const { name, caloriesPer100g, servingSizes, imageUrl } = req.body;
    const createdBy = req.user.role === 'admin' ? null : req.user.id;

    const product = await Product.create({
      name,
      caloriesPer100g,
      servingSizes,
      imageUrl: imageUrl || undefined,
      createdBy,
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const isOwner = product.createdBy?.toString() === req.user.id;
    const isAdmin = req.user.role === 'admin';

    if (!isAdmin && !isOwner) {
      return res.status(403).json({ message: 'You can only update your own products' });
    }

    const { name, caloriesPer100g, servingSizes, imageUrl } = req.body;

    product.name = name;
    product.caloriesPer100g = caloriesPer100g;
    product.servingSizes = servingSizes;
    product.imageUrl = imageUrl || undefined;

    await product.save();

    res.json(product);
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const isOwner = product.createdBy?.toString() === req.user.id;
    const isAdmin = req.user.role === 'admin';

    if (!isAdmin && !isOwner) {
      return res.status(403).json({ message: 'You can only delete your own products' });
    }

    await product.deleteOne();

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts,
  getMyProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
