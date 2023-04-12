import mysql from "mysql"

// We have connected our database
export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password : "987142bjk",
    database: "glb_blog"
})