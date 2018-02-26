const store = require('../models').store;
const stock = require('../models').stock;

module.exports = {
    create(req, res) {
        return store
            .create({
                name: req.body.name,
                city: req.body.city,
                address: req.body.address
            })
            .then(store => res.status(201).send(store))
            .catch(error => res.status(400).send(error));
    },
   /* list(req, res) {
        return category
            .all()
            .then(category => res.status(200).send(category))
            .catch(error => res.status(400).send(error));
    },*/

    list(req, res) {
        return store
            .findAll({
                include: [{
                    model: stock,
                    as: 'stocks',
                }],
            })
            .then(store => res.status(200).send(store))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return store
            .findById(req.params.storeId, {
                include: [{
                    model: stock,
                    as: 'stocks',
                }],
            })
            .then(store => {
                if (!store) {
                    return res.status(404).send({
                        message: 'store Not Found',
                    });
                }
                return res.status(200).send(store);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return store
            .findById(req.params.storeId, {
                include: [{
                    model: stock,
                    as: 'stocks',
                }],
            })
            .then(store => {
                if (!store) {
                    return res.status(404).send({
                        message: 'store Not Found',
                    });
                }
                return store
                    .update({

                        name: req.body.name || store.name,
                        city: req.body.description || store.city,
                        address: req.body.weight || store.address
                    })
                    .then(() => res.status(200).send(store))  // Send back the updated category.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return store
            .findById(req.params.storeId)
            .then(store => {
                if (!store) {
                    return res.status(400).send({
                        message: 'store Not Found',
                    });
                }
                return store
                    .destroy()
                    //.then(() => res.status(204).send())
                    .then(() => res.status(200).send({ message: 'store deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};