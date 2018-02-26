'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('refunds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      refundDate: {
        type: Sequelize.DATE
      },
      cause: {
        type: Sequelize.STRING
      },
      productState: {
        type: Sequelize.STRING
      },
      stockEntry: {
        type: Sequelize.BOOLEAN
      },
      units: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
        productId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'products',
                key: 'id',
                as: 'productId',
            },
        },
        stockId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'stocks',
                key: 'id',
                as: 'stockId',
            },
        }
    });
  },
  down: (queryInterface/*, Sequelize*/) => {
    return queryInterface.dropTable('refunds');
  }
};