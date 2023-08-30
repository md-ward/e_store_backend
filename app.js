const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 3000;
const cors = require('cors');
// ! Import Routes....

const productRoute = require('./src/shop/routes/productsRoutes');
const registeringRoute = require('./src/register/routes/signup_route');
const ordersRoute = require('./src/shop/routes/ordersRoutes');
const contactusRouter = require("./src/shop/routes/contactusRoutes");


//? MiddleWare  



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); // enable CORS for all routes

// % set Use Routes.......



app.use("/products", productRoute);
//*GET   /products/get : get all products...
//!POST  /products/add : add new product ...


app.use('/register', registeringRoute);
//* /register/signUp 
//! /register/login 

app.use('/order', ordersRoute);
/*
?GET /order/get : get all orders
!POST /order/newOrder : create a new order
*DELETE /order/delete/:orderId : delete an order by ID
*/


app.use('/contactUs', contactusRouter)

/*
!GET /contactUs/get : get all contact form submissions
!GET /count : get all messages count 

?POST /contactUs/new_message : create a new contact form submission
*DELETE /contactUs/delete/:messageId : delete a contact form submission by ID

*/


// * Connect to data base.........

// CONNECT TO DB 
mongoose.connect('mongodb://127.0.0.1:27017/productDb');

// ? Run  Server......

// LISTEN TO PORT 3000
app.listen(PORT, () => {
  console.log(`server run on http://localhost:${PORT}`);
});