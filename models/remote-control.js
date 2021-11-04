'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class remote - control extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  remote - control.init({
    lod: DataTypes.INTEGER,
    panel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'remote-control',
  });
  return remote - control;
};