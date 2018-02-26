const stock = require('../models').stock;

module.exports = {
    create(req, res) {
        return stock
            .create({
                units: req.body.units,
                productId: req.params.productId,
                storeId: req.params.storeId
            })
            .then(stock => res.status(201).send(stock))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return stock
            .find({
                where: {
                    id: req.params.stockId
                },
            })
            .then(stock => {
                if (!stock) {
                    return res.status(404).send({
                        message: 'stock Not Found',
                    });
                }

                return stock
                    .update({
                        units: req.body.units || stock.units
                    })
                    .then(updatedStock => res.status(200).send(updatedStock))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return stock
            .find({
                where: {
                    id: req.params.stockId
                },
            })
            .then(stock => {
                if (!stock) {
                    return res.status(404).send({
                        message: 'stock Not Found',
                    });
                }

                return stock
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};