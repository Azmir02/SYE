require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = () => {
  mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("database connected");
  });
};

// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => { console.log('Connected to MongoDB'); });
// exports.connect = async () => {
//   try {
//     mongoose.set("useNewUrlParser", true);

//     await mongoose.connect(process.env.MONGODB_URL);

//     console.log("connected to database");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// connect();
