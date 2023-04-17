// import {db} from "../db.js";

// export const navbar = (req, res) => {
//     const q = "SELECT EXISTS(SELECT 1 FROM teachers WHERE userid = ?) AS userExists";
//     const userId = 4; // Replace with the desired user ID
//     db.query(q, userId, (err, data) => {
//       if (err) return res.status(500).json(err);
//       const userExists = data[0].userExists;
//       if(userExists) return res.status(200).json("Teacher");
//       else return res.status(200).json("Student");
//     });
//   };