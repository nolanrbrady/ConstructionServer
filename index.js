const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer')
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
    console.log("Req body", req.body);
    const route = req.url;

    switch(route) {
        case "/":
            changeLOD(res);
            break;
        case "/panel":
            changePanel(res);
            break;

        default:
            res.send("Error. Please check route");
    };
   } catch(e){
    next(e);
   }
});

const changeLOD = (res) => {
    console.log("Change LOD Function Firing");
    res.send("LOD Changed");
};

const changePanel = (res) => {
    console.log("Change Panel Function is Firing");
    res.send("Panel Changed");
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});