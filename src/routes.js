const express = require("express");
const routes = express.Router();

const UserController = require("./Controllers/UserController");
const AuthController = require("./Controllers/AuthController");
const InstitutionController = require("./Controllers/InstitutionController");

routes.get("/user", UserController.read);
routes.post("/user", UserController.create);

routes.post("/auth", AuthController.login);

routes.post("/institution", InstitutionController.create);

module.exports = routes;
