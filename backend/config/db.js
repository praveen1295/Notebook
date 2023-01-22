const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const DB_URL = process.env.DB_URL;

const mongoURI = DB_URL;
mongoose.set("strictQuery", false);

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
