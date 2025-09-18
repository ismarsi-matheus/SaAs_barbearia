const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@saasbarbearia.lu8gjza.mongodb.net/database?retryWrites=true&w=majority&appName=SaasBarbearia`
    );
    console.log("Conexão bem-sucedida");
  } catch (error) {
    console.log("Ocorreu um erro ao conectar ao banco de dados", error);
  }
};

module.exports = connectToDatabase;
