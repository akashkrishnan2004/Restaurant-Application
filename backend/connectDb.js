import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Database connected`);
  } catch (error) {
    console.log(error);
    console.log("Database not connected");
  }
};

export default connectDB;
