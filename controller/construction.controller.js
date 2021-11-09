const db = require("../models");
const { RemoteControls, SessionChangeLog } = db.construction;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
const create = (data, res) => {
    const { lod, panel } = data;
   // Validate request
   if (!data) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const test_configuration = { lod, panel };

  // Save Tutorial in the database
  RemoteControls.create(test_configuration)
    .then(dataReturn => {
      res.send(dataReturn);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// Retrieve all Tutorials from the database.
const findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
const findOne = async (req, res) => {
    const config_data = await RemoteControls.findOne({ where: {id: 1 }});
    // console.log("Config Data in Controller", config_data);
    return config_data.dataValues;
};

// Update a Tutorial by the id in the request
const update = (data, res) => {
    RemoteControls.update(data, {
      where: { id: 1 }
    })
      .then(val => {
        if (val == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
            create(data, res);
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Test Configuration with id=1"
        });
      });
};

// Delete a Tutorial with the specified id in the request
// const delete = (req, res) => {
  

// };

// Delete all Tutorials from the database.
const deleteAll = (req, res) => {
  
};

// Find all published Tutorials
const findAllPublished = (req, res) => {
  
};

const Controllers = {
    create,
    update,
    findOne
}

module.exports = Controllers;