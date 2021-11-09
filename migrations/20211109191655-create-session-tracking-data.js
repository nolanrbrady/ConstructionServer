'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('session-tracking-data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activeLod: {
        type: Sequelize.INTEGER
      },
      activePanel: {
        type: Sequelize.INTEGER
      },
      eyeTracking: {
        type: Sequelize.JSON
      },
      headTracking: {
        type: Sequelize.JSON
      },
      handTracking: {
        type: Sequelize.JSON
      },
      sessionStartTime: {
        type: Sequelize.DATE
      },
      sessionEndTime: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('session-tracking-data');
  }
};