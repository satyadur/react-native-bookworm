import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected ${con.connection.host}`);
  } catch (error) {
    console.log("Error Connecting to database", error);
    process.exit(1);
  }
};
