'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('records', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
      },
      heart_rate_bpm: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total_steps: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      distance: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      altitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      calories: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pressure_systolic: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pressure_diastolic: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('records');
  }
};
