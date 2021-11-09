const db = require('../models');
const { SessionTracking } = db.construction;


const create = (data, res) => {
    if (!data) res.status(400).send({ message: "Couldn't save Session Data"});

    SessionTracking.create(data)
        .then(dataReturn => {
            res.send(dataReturn);
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "There was an issue logging session tracking data"
            });
        });    
};


const SessionData = {
    create
}

module.exports = SessionData;
