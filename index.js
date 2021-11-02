const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer')

const db = require('./models/index.js');
db.sequelize.sync({ force: true });

const upload = multer();
const app = express()
const port = 3001

// Needed to avoid CORS errors due to split stack
app.use(cors());

// Needed to parse the incoming data from front end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.put('/', upload.array(), (req, res, next) => {
   try {
    const data = req.body;
    const route = req.url;

    switch(data.type) {
        case "lod":
            changeLOD(data, res);
            break;
        case "panel":
            changePanel(data, res);
            break;

        default:
            res.send("Error. Please check route");
    };
   } catch(e){
    next(e);
   }
});

const changeLOD = (data, res) => {
    console.log("Change LOD Function Firing", data);
    res.send("LOD Changed");
};

const changePanel = (data, res) => {
    console.log("Change Panel Function is Firing", data);
    res.send("Panel Changed");
};



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});