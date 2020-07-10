'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('geolocations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
      },
      altitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('geolocations');
  }
};
