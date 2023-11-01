const express = require("express");

const app = express();
const port = 3030;
const routes = require("./routes");

const ConnectToDatabase = require("./Config/dbConfig");
ConnectToDatabase();

app.listen(port, () => console.log(`Express rodando na porta ${port}`));
app.use(express.json());
app.use(routes);
