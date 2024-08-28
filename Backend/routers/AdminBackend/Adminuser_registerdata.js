const express = require("express");
const route = express.Router();
const db = require("../../db");


route.get("/adminuserdatashow", (req, res) => {
   const sql = "select * from register";
   const { name, email, number, password, last_login } = req.body;


   db.query(sql, [name, email, number, password, last_login], (result, err) => {
      if (err) {
         res.send(err);
      } else {
         res.send(result)
      }
   })

});

module.exports = route;