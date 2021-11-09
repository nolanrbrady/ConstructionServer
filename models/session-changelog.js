'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SessionChangeLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SessionChangeLog.init({
    previousLod: DataTypes.INTEGER,
    previousPanel: DataTypes.INTEGER,
    currentPanel: DataTypes.INTEGER,
    currentLod: DataTypes.INTEGER,
    timeChanged: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'session-changelog',
  });
  return SessionChangeLog;
};