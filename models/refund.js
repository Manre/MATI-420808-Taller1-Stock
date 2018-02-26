'use strict';
module.exports = (sequelize, DataTypes) => {
  const refund = sequelize.define('refund', {
    refundDate: DataTypes.DATE,
    cause: DataTypes.STRING,
    productState: DataTypes.STRING,
    stockEntry: DataTypes.BOOLEAN,
    units: DataTypes.INTEGER
  }, {});
  refund.associate = function(models) {
      refund.belongsTo(models.stock, {
          foreignKey: 'stockId',
          onDelete: 'CASCADE',
      });

      refund.belongsTo(models.product, {
          foreignKey: 'productId',
          onDelete: 'CASCADE',
      });
  };
  return refund;
};