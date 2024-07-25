const express = require('express');
const router = express.Router();
const db = require('../db');


router.get("/userlogin", (req, res) => {
    const sql = "select * from login";
    const { email, password } = req.body;
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            res.send(err);
        } else if (result) {
            res.send(result);
        }
    })
});

module.exports = router;