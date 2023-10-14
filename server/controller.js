/// Variables ///
const { json } = require("express");
const db = require("./db.json");
let id = 4;

/// Functions ///
const getHouses = (req, res) => {
  res.status(200).send(db);
  console.log(`hit getHouses`);
  //   console.log(JSON.stringify(db));
};

const deleteHouse = (req, res) => {
  const { id } = req.params;
  console.log(id);
  //   for (let i = 0; i < db.length; i++) {
  //     if (db[i].id === +req) {
  //       db.splice(i, 1);
  //       res.status(200).send("house deleted");
  //       console.log(`house id:${req} deleted`);
  //       return;
  //     }

  const i = db.findIndex((house) => house.id === +id);
  console.log(i);
  if (i >= 0) {
    db.splice(i, 1);
    res.status(200).send(db);
    console.log(`house id:${id} deleted`);
    return;
  }
  res.status(404).send("house not found");
  console.log(`house id:${id} requested deletion failed: house not found`);
};

const createHouse = (req, res) => {
  const { address, price, imageURL } = req.body;

  const house = {
    id: id,
    address: address,
    price: price,
    imageURL: imageURL,
  };
  db.push(house);
  res.status(200).send(db);
  console.log(`house added: ${JSON.stringify(db[id - 1], null, 2)})`);
  id++;
};

const updateHouse = (req, res) => {};

module.exports = {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
};
