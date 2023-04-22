import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import navbar from "./routes/navbar.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";
import Teacher from "./routes/teacher.js";
import sdg from "./routes/sdggoals.js";

const app = express();

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


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/:userId", navbar);
app.use("/teachers", Teacher);
app.use("/sdg", sdg);

// The first property specify the port number ==> 8080 
app.listen(8800,() => {
    console.log("App was connected")
})
