'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SessionTrackingData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  session - tracking - data.init({
    activeLod: DataTypes.INTEGER,
    activePanel: DataTypes.INTEGER,
    eyeTracking: DataTypes.JSON,
    headTracking: DataTypes.JSON,
    handTracking: DataTypes.JSON,
    sessionStartTime: DataTypes.DATE,
    sessionEndTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'session-tracking-data',
  });
  return SessionTrackingData;
};