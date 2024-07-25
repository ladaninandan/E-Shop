const express = require("express");
const router = express.Router();
const db = require("../db")

router.use("", async (req, res) => {
    const { product_id, name, brand, price, discount, image, quantity } = req.body;
    const query = 'INSERT INTO cart (product_id, name, brand, price, discount, image, quantity) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(query, [product_id, name, brand, price, discount, image, quantity], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Product added to cart', id: result.insertId });
    });
});

module.exports = router;



