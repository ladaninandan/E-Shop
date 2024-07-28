const express = require("express");
const route = express.Router();
const db = require("../db");

route.use("/userOrderDetails/:id", (req, res) => {
   const { id } = req.params;
   const sql = "select * from userdetails where id = ?";

   const { FirstName, LastName, Email, Address, Number, City, State, Zip } = req.body;


   db.query(sql, [id, FirstName, , LastName, Email, Address, Number, City, State, Zip], (err, result) => {
      if (err) {
         res.send(err, "error");
      } else if (result) {
         res.send(result)
      }
   })
});

module.exports = route;