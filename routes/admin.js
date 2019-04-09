const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

const { getAddProduct ,postAddProduct } = require('../controllers/product.controller');

router.get('/add-product', getAddProduct);

router.post('/add-product', postAddProduct);

exports.routes = router;
