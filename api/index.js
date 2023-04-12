import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
//import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

// express initialized 
const app = express()

// We have used use method in order to access MYSQL workbrench
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes);
//app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// The first property specify the port number ==> 8080 
app.listen(8800,() => {
    console.log("App was connected")
})

/*
app.get('/myapp/', function(req, res){
    res.send("Hello from the root application URL");
});

app.get('/myapp/test/', function(req, res){
    res.send("Hello from the 'test' URL");
}); */ 
