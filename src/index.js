const express = require("express");
const routes = require("./routes");
const ConnectToDatabase = require("./Config/dbConfig");
const cors = require("cors");

const app = express();
const port = 3030;

ConnectToDatabase();

app.listen(port, () => console.log(`Express rodando na porta ${port}`));

app.use(cors());
app.use(express.json());
app.use(routes);
