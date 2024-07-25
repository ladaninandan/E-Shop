const express = require("express");
const router = express.Router();
const db = require("../db");

router.use("/mobiles", async (req, res) => {
    const { name, price, discount, image, Mobile_detail } = req.body;
    const sql = "select * from mobile ";

    db.query(sql, [name, price, discount, image, Mobile_detail], (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result);
        };
    })
});
module.exports = router;