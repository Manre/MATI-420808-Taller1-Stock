'use strict';
module.exports = (sequelize, DataTypes) => {
  const stock = sequelize.define('stock', {
    units: DataTypes.INTEGER
  }, {});
  stock.associate = function(models) {
      stock.belongsTo(models.product, {
          foreignKey: 'productId',
          onDelete: 'CASCADE',
      });

      stock.belongsTo(models.store, {
          foreignKey: 'storeId',
          onDelete: 'CASCADE',
      });

      stock.hasMany(models.refund, {
          foreignKey: 'stockId',
          as: 'refunds',
      });
  };
  return stock;
};