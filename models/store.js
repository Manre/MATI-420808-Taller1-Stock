'use strict';
module.exports = (sequelize, DataTypes) => {
  const store = sequelize.define('store', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  store.associate = function(models) {
      store.hasMany(models.stock, {
          foreignKey: 'storeId',
          as: 'stocks',
      });
  };
  return store;
};