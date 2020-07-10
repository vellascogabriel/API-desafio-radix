'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('exercises', 'record_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'records',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('exercises', 'record_id')
  }
};
