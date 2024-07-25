const express = require('express');
const port = 5000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');;
const mysql = require('mysql2');
const loginRouter = require("./routers/login");
const RegisterRouter = require("./routers/register");
const userLoginRouter = require("./routers/userLogin")
const cart = require("./routers/cart");
const showdatacart = require('./routers/showdatacart')
const deletecartitems = require("./routers/deletecartitems");
const Userdetails = require("./routers/UserDetiles");
// const createOrder = require("./routers/razorpay")
const Searchitems = require("./routers/Search");
const mobiles = require("./routers/mobiles")

app.use(cors())
// this code is post man body send data used
app.use(express.json());
app.use(bodyParser.json());


// Route
app.post("/login", loginRouter);
app.post("/register", RegisterRouter);
app.post("/cart", cart);


app.get("/userlogin", userLoginRouter)
app.get("/showdatacart", showdatacart)

// delete
app.delete("/deleteartitems/:id", deletecartitems)

// insert
app.post("/Userdetails", Userdetails)

// payment gatway
// app.post("/createOrder", createOrder)

// search
app.get("/search/:key", Searchitems)

// mobiles get
app.get("/mobiles", mobiles)

app.listen(port, () => {
    console.log("listening...   ", port)
})
