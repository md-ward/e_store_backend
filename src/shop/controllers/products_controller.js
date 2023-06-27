const { json } = require('body-parser');
const Product = require('../models/productsModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  const product = new Product({
    product_name: req.body.product_name,
    description: req.body.description,
    price: req.body.price,
    rate: req.body.rate,
    product_type: req.body.product_type
  });



  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};