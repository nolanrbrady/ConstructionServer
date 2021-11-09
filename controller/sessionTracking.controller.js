const db = require('../models');
const { SessionTracking } = db.construction;


const create = (data, res) => {
    SessionTracking.create(data)
        .then(dataReturn => {
            res.send(dataReturn);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "There was an issue logging session tracking data"
            });
        });    
};


const SessionData = {
    create
}

module.exports = SessionData;
