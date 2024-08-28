const express = require("express");
const route = express.Router();
const db = require("../../db");



route.get("/showOrder", (req, res) => {
   const sql = "select * from orders";
   const { id, order_id, amount, currency, receipt, status, created_at } = req.body;

   db.query(sql, [id, order_id, amount, currency, receipt, status, created_at], (result, err) => {
      if (err) {
         res.send(err);
      } else {
         res.send(result);
      }
   })
});

module.exports = route;