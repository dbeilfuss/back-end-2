/// Setup ///
const express = require("express");
const cors = require("cors");
const controller = require("./controller");
const { getHouses, createHouse, updateHouse, deleteHouse } = controller;
const baseURL = `/api/houses`;

const app = express();

app.use(express.json());
app.use(cors());

/// Endpoints ///
app.get(baseURL, getHouses);
app.post(baseURL, createHouse);
app.put(baseURL + "/:id", updateHouse);
app.delete(baseURL + "/:id", deleteHouse);

/// Listen ///
const port = 4004;
app.listen(port, () => console.log(`Server running on port ${port}`));
