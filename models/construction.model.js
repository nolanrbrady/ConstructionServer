module.exports = (sequelize, Sequelize) => {
    const Construction = sequelize.define("remote_control", {
      lod: {
        type: Sequelize.INTEGER
      },
      panel: {
        type: Sequelize.INTEGER
      },
    });
  
    return Construction;
  };