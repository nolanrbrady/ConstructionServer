const db = require('../models');
const { SessionChangeLog } = db.construction;

const sequelize = require('sequelize');

const create = (data, res) => {
    if (!data) res.status(400).send({ message: "Couldn't save config change"});
  SessionChangeLog.create(data)
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
  const data = await SessionChangeLog.findAll();
  return data;
}

const SessionConfig = { 
    create,
    findAll
};

module.exports = SessionConfig