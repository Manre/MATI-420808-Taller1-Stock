const storesController = require('../controllers').store;
const productsController = require('../controllers').product;
const refundsController = require('../controllers').refund;
const stocksController = require('../controllers').stock;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Stock API!',
    }));

    app.post('/api/stores', storesController.create);
    app.get('/api/stores', storesController.list);
    app.get('/api/stores/:storeId', storesController.retrieve);
    app.put('/api/stores/:storeId', storesController.update);
    app.delete('/api/stores/:storeId', storesController.destroy);


    app.post('/api/products', productsController.create);
    app.get('/api/products', productsController.list);
    app.get('/api/products/:productId', productsController.retrieve);
    app.put('/api/products/:productId', productsController.update);
    app.delete('/api/products/:productId', productsController.destroy);

    app.post('/api/stocks/:storeId/:productId', stocksController.create);
    app.put('/api/stocks/:stockId', stocksController.update);
    app.delete('/api/stocks/:stockId', stocksController.destroy);

    app.post('/api/refunds/:productId/:stockId', refundsController.create);
    app.put('/api/refunds/:refundId', refundsController.update);
    app.delete('/api/refunds/:refundId', refundsController.destroy);


    app.all('/api/', (req, res) =>
        res.status(405).send({
            message: 'Method Not Allowed',
        }));
};