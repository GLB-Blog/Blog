import express from "express";
import {db} from "../db.js";

const router = express.Router();

router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const q = "SELECT EXISTS(SELECT 1 FROM teachers WHERE userid = ?) AS isTeacher";
  db.query(q, userId, (err, data) => {
    if (err) return res.status(500).json(err);

    const isTeacher = !!data[0].isTeacher;
    if (isTeacher) {
      return res.status(200).json("Teacher");
    } else if (data[0].isTeacher === 0) {
      return res.status(200).json("Student");
    } else {
      return res.status(404).json("User not found");
    }
  });
});

export default router;
