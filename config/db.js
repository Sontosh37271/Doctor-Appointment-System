const mongoose = require("mongoose");
const colors = require("colors");
//const dotenv = require("dotenv");

//dotenv.config(); // jate .env file ar data gulo load hote pare

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`);
  }
};
module.exports = connectDB; // connectDB k export kobo jano onno file a use korte pari
