import { Router } from "express";
import * as Pog from "../db/pog";
import { PoggerType } from "../models/Poggers";
const router = Router();

router.get("/hi", (req, res) => {
    res.send("hello");
});

router.post("/pog", async (req, res, next) => {
    console.log(req.query);

    const data: PoggerType = {
        pogVal: parseInt(req.query.pogVal as string),
        pogName: req.query.pogName as string,
        pogSecret: req.params.pogSecret,
    };

    try {
        const pogument = await Pog.create(data);
        res.send(pogument);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
