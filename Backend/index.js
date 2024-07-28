const express = require('express');
const port = 5000;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');;
const loginRouter = require("./routers/login");
const RegisterRouter = require("./routers/register");
const userLoginRouter = require("./routers/userLogin")
const cart = require("./routers/cart");
const showdatacart = require('./routers/showdatacart')
const deletecartitems = require("./routers/deletecartitems");
const Userdetails = require("./routers/UserDetiles");
const Searchitems = require("./routers/Search");
const mobiles = require("./routers/mobiles")
const Order = require("./routers/Orders")
const Payments = require("./routers/Payment")
const userOrderDeatailes = require("./routers/userOrderDetails");
app.use(cors())
// this code is post man body send data used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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

// search
app.get("/search/:key", Searchitems)

// mobiles get
app.get("/mobiles", mobiles)

// razorpay using order 
app.post("/orders", Order)

// razorpay using payment Fatch
app.get("/payment/:paymentId", Payments)

// userOrderDetailes 
app.get("/userOrderDetails/:id", userOrderDeatailes)


app.listen(port, () => {
    console.log("listening...", port)
})
