const express = require("express")
const router = express.Router();
const db = require('../db');


router.use('/Userdetails', async (req, res) => {
    const { FirstName, LastName, Email, Address, Number, City, State, Zip } = req.body;
    const sql = "insert into userdetails (FirstName, LastName, Email, Address, Number, City, State, Zip) values (?,?,?,?,?,?,?,?)";

    db.query(sql, [FirstName, LastName, Email, Address, Number, City, State, Zip], (err, result) => {
        if (err) {
            res.send(err)
        } else if (result) {
            return res.json("Success")
        }


    })
});

module.exports = router;
