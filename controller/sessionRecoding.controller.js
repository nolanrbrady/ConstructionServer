const db = require('../models');
const { SessionRecording } = db.construction;

const sequelize = require('sequelize');

const create = (data, res) => {
    if (!data) res.status(400).send({ message: "Couldn't save session recording"});
  SessionRecording.create(data)
    .then(dataReturn => {
      res.send(dataReturn)
    })
    .catch(err => {
      res.status(400).send({
        message: err.message || "There was an error"
      });
    });
};

const findAll = async () => {
  const data = await SessionRecording.findAll();
  return data;
}

const SessionRecordings = { 
    create,
    findAll
};

module.exports = SessionRecordings;