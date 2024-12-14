import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js";
import dotenv from "dotenv"


const app = express();
dotenv.config()
app.use(cors());
app.use(`/`, router)
const PORT = 8000;


DBConnection();


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});