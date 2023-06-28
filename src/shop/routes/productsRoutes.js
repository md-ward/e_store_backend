const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products_controller')

router.get('/get', productsController.getAllProducts);
router.get('/count',productsController.getCount);
router.post('/add', productsController.createProduct);


module.exports = router;