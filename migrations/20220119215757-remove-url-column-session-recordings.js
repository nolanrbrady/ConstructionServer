'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('session-recordings', 'url')
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('session-recordings', 'url', {
        type: Sequelize.STRING,
      })
    ])
  }
};
