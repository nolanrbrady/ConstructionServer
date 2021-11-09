'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('session-changelogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      previousLod: {
        type: Sequelize.INTEGER
      },
      previousPanel: {
        type: Sequelize.INTEGER
      },
      currentPanel: {
        type: Sequelize.INTEGER
      },
      currentLod: {
        type: Sequelize.INTEGER
      },
      timeChanged: {
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
    await queryInterface.dropTable('session-changelogs');
  }
};