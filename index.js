const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const Controllers = require('./controller/construction.controller.js');

const db = require('./models/index.js');
const SessionConfig = require('./controller/sessionChangeLog.controller.js');
const SessionData = require('./controller/sessionTracking.controller.js');

// db.sequelize.sync({ force: true });
db.sequelize.sync();

const upload = multer();
const app = express()
const port = process.env.PORT ? process.env.PORT : 3001

// Needed to avoid CORS errors due to split stack
app.use(cors());

// Needed to parse the incoming data from front end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.put('/', upload.array(), (req, res, next) => {
   try {
    const data = req.body;
    const route = req.url;
    // Handles the update logic for the DB
    Controllers.update(data, res);

   } catch(e){
    next(e);
   }
});

app.put('/log-config-change', upload.array(), (req, res, next) =>{
    try {
        const data = req.body;
        console.log(data);
        SessionConfig.create(data, res);
    } catch (e) {
        next(e);
    }
})

app.put('/session-tracking-data', upload.array(), (req, res, next) => {
    try {
        const data = req.body;
        SessionData.create(data);
    } catch (err) {
        next(err);
    }
})


app.get('/', async (req, res, next) => {
    try {
       const config_data = await Controllers.findOne(req, res);
    //    console.log("Configuration Data from DB", config_data);
       if (config_data) res.send(config_data);
       else res.send("Sorry, something went wrong getting the rig configuration.")
    } catch(e) {
        // next(e);
        res.send(`Sorry, something went wrong getting the rig configuration. Error: ${e}`);
    }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});