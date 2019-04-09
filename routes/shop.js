const express = require('express');

const router = express.Router();

const { fetchAllProducts } = require('../controllers/product.controller');

router.get('/', fetchAllProducts);

module.exports = router;
