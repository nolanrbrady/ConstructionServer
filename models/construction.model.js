module.exports = (sequelize, Sequelize) => {
    const RemoteControls = sequelize.define("remote-controls", {
      lod: {
        type: Sequelize.INTEGER,
        defaultValue: 200
      },
      panel: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
    });

    const UpdateSessionChangeLog = sequelize.define("session-changelogs", {
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
        } 
    });
  
    return {
        RemoteControls,
        UpdateSessionChangeLog,
    };
  };