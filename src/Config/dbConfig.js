const mongoose = require("mongoose");

const dbPassword = "1234";
const dbConfig = `mongodb+srv://user_test:${dbPassword}@cluster0.h5ztzdc.mongodb.net/?retryWrites=true&w=majority`;

const ConnectionToDatabase = async () => {
  await mongoose
    .connect(dbConfig)
    .then(console.log("Foi feita a conexão com o bando de dados"))
    .catch((error) => {
      console.log(`Erro na conexão com banco de dados: ${error}`);
    });
};

module.exports = ConnectionToDatabase;
