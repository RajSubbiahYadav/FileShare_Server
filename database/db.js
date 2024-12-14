import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URL = process.env.DB_CREDENTIALS
  try {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
    console.log("Database Connected Succesfully");
    
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
