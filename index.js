const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop')

const app = express();
const PORT = 8080;

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter.routes);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404');
})

app.listen(PORT, () => console.log(`App is working on port ${PORT}`));
