const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

const getmongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected successfully");
  } catch (error) {
    console.error( error);
  }
};
module.exports= getmongoDb