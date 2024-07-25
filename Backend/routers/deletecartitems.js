const express = require("express");
const router = express.Router();
const db = require("../db");


router.delete('/deleteartitems/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM cart WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

module.exports = router;