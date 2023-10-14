/// Variables ///
const db = require("./db.json");
let id = 4;

/// Functions ///
const getHouses = (req, res) => {
  res.status(200).send(db);
  console.log(`hit getHouses`);
};

const deleteHouse = (req, res) => {
  //   for (let i = 0; i < db.length; i++) {
  //     if (db[i].id === +req) {
  //       db.splice(i, 1);
  //       res.status(200).send("house deleted");
  //       console.log(`house id:${req} deleted`);
  //       return;
  //     }

  const i = db.findIndex((house) => house.id === req);
  if (i > 0) {
    db.splice(db[i]);
    console.log(`house id:${req} deleted`);
    return;
  }
  res.status(404).send("house not found");
  console.log(`house id:${req} requested deletion failed: house not found`);
};

const createHouse = (req, res) => {
  const { id, address, price, imageURL } = req;
  db.push(req);
  res.status(200).send("house added");
  console.log(`house created: ${req}`);
};

const updateHouse = (req, res) => {};

module.exports = {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
};
