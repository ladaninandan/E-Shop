const express = require('express');
const router = express.Router();
const db = require('../db');




// Login 
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM register WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            return res.json(`error ${err}`)
        } else if (results.length > 0) {
            const userId = results[0].id;
            const updateLoginTimeQuery = 'UPDATE register SET last_login = NOW() WHERE id = ?';
            db.query(updateLoginTimeQuery, [userId], (err, result) => {
                if (result) {
                    if (req.body.email === "admin@gmail.com" && req.body.password === "admin@1234") {
                        return res.json("admin");
                    } else {
                        return res.json("success");
                    }
                } else {
                    return res.json("success");
                }
                return res.json(`error ${err}`)
            });
        } else {
            // res.status(400).send('Invalid email or password');
            return res.json("fail");
        }
    });
});

module.exports = router;










module.exports = router;