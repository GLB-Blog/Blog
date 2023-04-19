import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
//import userRoutes from "./routes/users.js";
import navbar from "./routes/navbar.js";
import cookieParser from "cookie-parser";
import cors from "cors"; // Add this line

// express initialized 
const app = express()

app.use(cors()); // Add this line

// We have used use method in order to access MYSQL workbrench
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes);
app.use("/:userId", navbar);
//app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// The first property specify the port number ==> 8080 
app.listen(8800,() => {
    console.log("App was connected")
})