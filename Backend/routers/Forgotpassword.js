const express = require("express");
const route = express.Router();
const db = require("../db");
const nodemailer = require("nodemailer");
const crypto = require("crypto");


// route.get("/forget-password", async (req, res) => {
//    let tesAccount = await nodemailer.createTestAccount();

//    let transporter = await nodemailer.createTransport({

//       host: "smtp.ethereal.email",
//       port: 587,
//       auth: {
//          user: 'chanelle80@ethereal.email',
//          pass: 'DGntBDQ2kb8prkZ4py'
//       },

//    })

//    // send mail

//    let info = await transporter.sendMail({
//       from: '"Nandan Ladani 👻" <chanelle80@ethereal.email>', // sender address
//       to: "ladaninandan46@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//    });

//    console.log("message send", info.messageId)
//    res.json(info)
// });

// Nodemailer setup



// Generate OTP and send it to the user's email
route.post("/forgot-password", async (req, res) => {


   const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: 'ladaninandan46@gmail.com',
         pass: 'yhxy hhtq ihxo pkkx'
      }
   });

   const { email } = req.body;

   db.query("SELECT * FROM register WHERE email = ?", [email], (err, results) => {
      if (err) {
         return res.status(500).json({ message: "Database error" });
      }

      if (results.length === 0) {
         return res.status(404).json({ message: "User not found" });
      }

      const otp = crypto.randomInt(100000, 999999).toString();
      const expiry = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes

      const sql = "INSERT INTO otps (user_id, otp, expiry) VALUES (?, ?, ?)"

      db.query(sql, [results[0].id, otp, expiry], (err) => {
         if (err) {
            return res.status(500).json({ message: "Database error" });
         }
         const mailOptions = {
            from: '"Nandan Ladani 👻" <ladaninandan46@gmail.com>',
            to: email,
            subject: "Your Password Reset OTP",
            text: `Your OTP for password reset is ${otp}. It is valid for 5 minutes. 
               http://localhost:5000/reset-password`,
            html: `
            <h1>Hello! dear customer</h1>
            <p>Your OTP for password reset is ${otp}.It is valid for 5 minutes.
            http://localhost:5000/reset-password</p>
               <img src="cid:logo" alt="Logo"  style="width: 200px; height: 200px;"  />
            `,
            attachments: [
               {
                  filename: 'logo.png',
                  path: 'D:/project-react/my-project/public/logointeb.png', // Path to your logo file
                  cid: 'logo' // CID for inline image
               }
            ]
         };

         transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
               console.error('Error sending email:', err);
               return res.status(500).json({ message: "Email sending failed", error: err.message });
            }
            res.json({ message: "OTP sent to your email" });
         });
      }
      );
   });
});


module.exports = route;