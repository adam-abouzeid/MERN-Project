const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MONGO db connected");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connectDB;
