// import express from "express";
import {db} from "../db.js";

// const router = express.Router();

app.get("/navbar/:userId", async (req, res) => {
    const { userId } = req.params;
    const q = 'SELECT EXISTS(SELECT 1 FROM teachers WHERE userid = ?) AS userExists';

    db.query(q, userId, (err, data) => {
        if (err) return res.status(500).json(err);
        const userExists = data[0].userExists;
        if(userExists) return res.status(200).json(true);
        else return res.status(200).json(false);
    });
  });

export default router;
