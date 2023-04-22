import express from "express";
import {db} from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
    const q = 'SELECT * FROM sdg WHERE id BETWEEN 1 AND 17';
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
});

export default router
