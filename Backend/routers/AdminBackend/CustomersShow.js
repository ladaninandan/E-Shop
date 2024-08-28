const express = require("express");
const route = express.Router();
const db = require("../../db");


route.get("/payments", (req, res) => {
   const sql = "select * from payments";
   const { id, payments_id, order_id, status, method, amount, currency, created_at } = req.body;
   db.query(sql, [id, payments_id, order_id, status, method, amount, currency, created_at], (result, error) => {
      if (error) {
         res.send(error);
      } else {
         res.send(result)
      }
   })
});

module.exports = route;