const express = require("express");
const routes = express.Router();

const UserController = require("./Controllers/UserController");
const AuthController = require("./Controllers/AuthController");
const InstitutionController = require("./Controllers/InstitutionController");
const BackpackController = require("./Controllers/BackpackController");

const upload = require("./Config/multer");
const FileController = require("./Controllers/FileController");

routes.get("/user", UserController.read);
routes.post("/user", UserController.create);

routes.post("/auth", AuthController.login);

routes.post("/institution", InstitutionController.create);

routes.post("/file", upload.single("file"), FileController.create);

routes.post("/backpack", BackpackController.create);

module.exports = routes;
