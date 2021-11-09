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

    const SessionTracking = sequelize.define("session-tracking-data", {
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
          }
    })
  
    return {
        RemoteControls,
        UpdateSessionChangeLog,
        SessionTracking
    };
  };