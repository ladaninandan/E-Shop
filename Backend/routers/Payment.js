const express = require("express");
const route = express.Router();
const db = require("../db");
const Razorpay = require("razorpay");


route.use("/payment/:paymentId", async (req, res) => {
   const { paymentId } = req.params;
   const razorpay = new Razorpay({
      key_id: "rzp_test_U30XP8raz2jBPn",
      key_secret: "Nza3NbYFnAyRWHaKAK6pIGy2"
   });

   try {
      const payment = await razorpay.payments.fetch(paymentId);
      if (!payment) {
         return res.status(500).json("error at razorpay loading");
      }

      const paymentData = {
         payment_id: payment.id,
         order_id: payment.id,
         status: payment.status,
         method: payment.method,
         amount: payment.amount,
         currency: payment.currency
      };

      // data store databases 

      const query = 'INSERT INTO payments SET ?';
      db.query(query, paymentData, (err, result) => {
         if (err) {
            console.error("Error inserting payment into database:", err);
            return res.status(500).send("internal server error");
         }
         res.json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency
         });
      });

   } catch (error) {
      console.error("Error fetching payment:", error);
      res.status(500).send("inte");
   }
});

module.exports = route;
