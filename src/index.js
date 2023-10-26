const express = require("express");

const app = express();
const port = 3000;

const ConnectToDatabase = require("./Config/dbConfig");
ConnectToDatabase();

app.listen(port, () => console.log(`Express rodando na porta ${port}`));
app.use(express.json());
