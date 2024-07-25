const express = require("express");
const router = express.Router();
const db = require("../db")


router.get('/search', (req, res) => {
    const { query } = req.query; // Retrieve the search query from the request

    if (!query) {
        return res.status(400).send('Search query is required');
    }

    // Construct the SQL query
    const sql = `
        SELECT * FROM products
        WHERE name LIKE ? OR category LIKE ? OR company LIKE ?`;

    // Parameters for the SQL query
    const params = [`%${query}%`, `%${query}%`, `%${query}%`];

    // Execute the SQL query
    db.query(sql, params, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Server Error');
        }
        res.json(results);
    });
});


module.exports = router;



