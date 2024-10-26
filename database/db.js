import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URL = `mongodb://user:user1234@filesharing-shard-00-00.0ngdg.mongodb.net:27017,filesharing-shard-00-01.0ngdg.mongodb.net:27017,filesharing-shard-00-02.0ngdg.mongodb.net:27017/?ssl=true&replicaSet=atlas-ke6yfz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=fileSharing`
  try {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
    console.log("Database Connected Succesfully");
    
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
