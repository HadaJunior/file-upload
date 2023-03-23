const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = () => {
  return mongoose.connect('mongodb://127.0.0.1:27017/file-upload');
}

module.exports = connectDB;
