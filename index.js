const express = require('express');
const cors = require('cors');
const app = express()
const port = 3001

app.use(cors());

app.get('/', (req, res) => {
    console.log("Req", req);
    console.log("Res", res);

    // const { route } = res.data;
    const route = '/lod';

    switch(route.path) {
        case "/lod":
            console.log("Changing LOD");
            this.changeLOD(res);
        case "/panel":
            console.log("Changing panel");
            this.changePanel(res);

        default:
            res.send("Error. Please check route");
    };
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