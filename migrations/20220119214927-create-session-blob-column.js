'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('session-recordings', 'blob', {
        type: Sequelize.BLOB('long')
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('session-recordings', 'blob')
    ])
  }
};
