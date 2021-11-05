module.exports = (sequelize, Sequelize) => {
    const Construction = sequelize.define("remote-control", {
      lod: {
        type: Sequelize.INTEGER,
        defaultValue: 200
      },
      panel: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
    });
  
    return Construction;
  };