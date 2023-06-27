const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products_controller')

router.get('/products', productsController.getAllProducts);
router.post('/products', productsController.createProduct);

module.exports = router;