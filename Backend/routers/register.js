
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/register', (req, res) => {
    const { name, email, number, password, conformPassword } = req.body;

    const checkEmailQuery = 'SELECT * FROM register WHERE email = ?';
    db.query(checkEmailQuery, [email], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return res.json('Email already exists');
        }

        // Check if passwords match
        if (password !== conformPassword) {
            // return res.status(400).send('Passwords do not match');
            return res.json("fail");
        }

        // Insert new user
        const insertUserQuery = 'INSERT INTO register (name, email, number, password, conformPassword) VALUES (?, ?, ?, ?, ?)';
        db.query(insertUserQuery, [name, email, number, password, conformPassword], (err, results) => {
            if (err) throw err;
            res.send('User registered successfully');

        });
    });
});




module.exports = router;