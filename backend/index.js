import express from "express";
import authRoutes from "./routes/auth.routes.js"
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import cors from 'cors'

configDotenv()

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.use(express.json())
app.use(cookieParser());

app.use("/api/auth", authRoutes )
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

mongoose.connect(
    process.env.MONGO_URI,
).then(() => {
    
    console.log("Connected to mongodb server")
    app.listen(PORT, (req, res, next) => {
        console.log(`Server is running on port ${PORT}`)
    })}
)