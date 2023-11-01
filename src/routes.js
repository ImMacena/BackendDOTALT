const express = require("express");
const routes = express.Router();

const UserController = require("./Controllers/UserController");

routes.get("/user", UserController.read);
routes.post("/user", UserController.create);

module.exports = routes;
