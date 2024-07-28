const express = require("express");
const route = express.Router();
const db = require("../db");
const Razorpay = require("razorpay");


route.use("/orders", async (req, res) => {
   // console.log("Received request body:", req.body);

   const razorpay = new Razorpay({
      key_id: "rzp_test_U30XP8raz2jBPn",
      key_secret: "Nza3NbYFnAyRWHaKAK6pIGy2"
   });

   const options = {

      amount: req.body.amount,
      currency: req.body.currency,
      receipt: "receipt#1",
      payment_capture: 1
   };

   try {
      const response = await razorpay.orders.create(options);
      const orderData = ({
         order_id: response.id,
         amount: response.amount,
         currency: response.currency,
         receipt: options.receipt,
         status: 'created'
      });

      // data bases store

      const query = 'INSERT INTO orders SET ?';
      db.query(query, orderData, (err, result) => {
         if (err) {
            console.error("Error inserting order into database:", err);
            return res.status(500).send("internal server error");
         }
         res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
         });
      });


   } catch (error) {
      console.error("Error creating Razorpay order:", error);
      res.status(500).send("internal server error");
   }
});

module.exports = route;