const product = require('../models').product;
const stock = require('../models').stock;
const refund = require('../models').refund;

module.exports = {
    create(req, res) {
        return product
            .create({
                id: req.body.id,
                name: req.body.name,
                description: req.body.description,
                weight: req.body.weight,
                width: req.body.width,
                height: req.body.height,
                depth: req.body.depth,
                information: req.body.information,
            })
            .then(product => res.status(201).send(product))
            .catch(error => res.status(400).send(error));
    },
   /* list(req, res) {
        return category
            .all()
            .then(category => res.status(200).send(category))
            .catch(error => res.status(400).send(error));
    },*/

    list(req, res) {
        return product
            .findAll({
                include: [{
                    model: stock,
                    as: 'stocks',
                },{
                    model: refund,
                    as: 'refunds',
                }],
            })
            .then(product => res.status(200).send(product))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return product
            .findById(req.params.productId, {
                include: [{
                    model: stock,
                    as: 'stocks',
                },{
                    model: refund,
                    as: 'refunds',
                }],
            })
            .then(product => {
                if (!product) {
                    return res.status(404).send({
                        message: 'product Not Found',
                    });
                }
                return res.status(200).send(product);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return product
            .findById(req.params.productId, {
                include: [{
                    model: stock,
                    as: 'stocks',
                }],
            })
            .then(product => {
                if (!product) {
                    return res.status(404).send({
                        message: 'product Not Found',
                    });
                }
                return product
                    .update({

                        name: req.body.name || product.name,
                        description: req.body.description || product.description,
                        weight: req.body.weight || product.weight,

                        width: req.body.width || product.width,
                        height: req.body.height || product.height,
                        depth: req.body.depth || product.depth,
                        information: req.body.information || product.information,
                    })
                    .then(() => res.status(200).send(product))  // Send back the updated category.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return product
            .findById(req.params.productId)
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                        message: 'product Not Found',
                    });
                }
                return product
                    .destroy()
                    //.then(() => res.status(204).send())
                    .then(() => res.status(200).send({ message: 'product deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};