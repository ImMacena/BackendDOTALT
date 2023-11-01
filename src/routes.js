const express = require("express");
const routes = express.Router();

const UserController = require("./Controllers/UserController");
const AuthController = require("./Controllers/AuthController");

routes.get("/user", UserController.read);
routes.post("/user", UserController.create);

routes.post("/auth", AuthController.login);

module.exports = routes;
