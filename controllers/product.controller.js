const products = [];

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
}

exports.getAddProduct = (req, res, next) => {
    res.render('add-product');
}

exports.fetchAllProducts = (req, res, next) => {
    res.render('shop', { prods: products, docTitle: 'Shop' });
}