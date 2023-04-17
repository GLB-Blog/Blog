import mysql from "mysql";
import fs from "fs";

// Read the password from a text file
const password = fs.readFileSync("C:/Users/DARK/Desktop/password.txt", "utf-8").trim();

// Create the database connection
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: password,
    database: "glb_blog"
});
