const express = require("express");
const route = express.Router();
const db = require("../db");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");


// Verify OTP and reset the password
route.post("/reset-password", (req, res) => {
   const { email, otp, password, conformPassword } = req.body;

   db.query("SELECT * FROM register WHERE email = ?", [email], (err, results) => {
      if (err) {
         return res.status(500).json({ message: "Database error" });
      }

      if (results.length === 0) {
         return res.status(404).json({ message: "User not found" });
      }

      const user = results[0];

      db.query(
         "SELECT * FROM otps WHERE user_id = ? AND otp = ? AND expiry > NOW()",
         [user.id, otp],
         async (err, results) => {
            if (err) {
               return res.status(500).json({ message: "Database error" });
            }

            if (results.length === 0) {
               return res.status(400).json({ message: "Invalid or expired OTP" });
            }

            // const hashedPassword = await bcrypt.hash(newPassword, 10);

            db.query(
               "UPDATE register SET password = ? , conformPassword = ? WHERE id = ?",
               [password, conformPassword, user.id],
               (err) => {
                  if (err) {
                     return res.status(500).json({ message: "Database error" });
                  }

                  // Delete the OTP after successful password reset
                  db.query("DELETE FROM otps WHERE user_id = ?", [user.id]);

                  res.json({ message: "Password reset successful" });
               }
            );
         }
      );
   });
});

module.exports = route;