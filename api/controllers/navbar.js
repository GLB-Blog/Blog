// import { db } from "../db.js";

// export const navbar = (req, res) => {
//     const q = "SELECT EXISTS(SELECT 1 FROM teachers WHERE userid = ?) AS userExists";
//     const userId = req.user.id; // Get user ID from request parameters

//     db.query(q, [userId], (err, data) => {
//         if (err) return res.status(500).json(err);

//         const userExists = data[0].userExists;
//         if (userExists) {
//         return res.status(200).json({ isTeacher: true });
//         } else {
//         return res.status(200).json({ isTeacher: false });
//         }
//     });    
// };
