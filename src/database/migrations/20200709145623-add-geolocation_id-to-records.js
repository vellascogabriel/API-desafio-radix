'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('records',
      'geolocation_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'geolocations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('records', 'geolocation_id');
  }
};
