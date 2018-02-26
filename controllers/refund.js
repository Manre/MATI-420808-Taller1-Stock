const refund = require('../models').refund;

module.exports = {
    create(req, res) {
        return refund
            .create({
                refundDate: req.body.refundDate,
                cause: req.body.cause,
                productState: req.body.productState,
                stockEntry: req.body.stockEntry,
                units:req.body.units,
                productId: req.params.productId,
                stockId: req.params.stockId
            })
            .then(refund => res.status(201).send(refund))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return refund
            .find({
                where: {
                    id: req.params.refundId
                },
            })
            .then(refund => {
                if (!refund) {
                    return res.status(404).send({
                        message: 'refund Not Found',
                    });
                }

                return refund
                    .update({
                        refundDate: req.body.refundDate|| refund.refundDate,
                        cause: req.body.cause|| refund.cause,
                        productState: req.body.productState|| refund.productState,
                        stockEntry: req.body.stockEntry|| refund.stockEntry,
                        units: req.body.units || refund.units
                    })
                    .then(updatedRefund => res.status(200).send(updatedRefund))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return refund
            .find({
                where: {
                    id: req.params.refundId
                },
            })
            .then(refund => {
                if (!refund) {
                    return res.status(404).send({
                        message: 'refund Not Found',
                    });
                }

                return refund
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};