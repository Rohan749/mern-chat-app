import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import mongoose from "mongoose";

dotenv.config();



const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URL;

const app = express();

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)


mongoose
  .connect(MONGO)
  .then(() => {
    app.listen(PORT, (req, res) => {
        console.log(`Server is running on port ${PORT}`);
      });
    console.log("Connected to mongodb");
  }).catch((error) => {
    console.log("Error connecting to mongodb:", error.message)
  })