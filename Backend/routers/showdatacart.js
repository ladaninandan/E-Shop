const express = require("express");
const router = express.Router();
const db = require("../db")


router.use("", async (req, res) => {
    const query = 'SELECT * FROM cart';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;