import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import navbar from "./routes/navbar.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors"; // Add this line

// express initialized 
const app = express()

app.use(cors()); // Add this line

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// We have used use method in order to access MYSQL workbrench
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/:userId", navbar);

// The first property specify the port number ==> 8080 
app.listen(8800,() => {
    console.log("App was connected")
})