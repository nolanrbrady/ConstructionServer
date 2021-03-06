'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('remote-controls', [{
      lod: 200,
      panel: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1            
  }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('remote-controls', null, {});
  }
};
