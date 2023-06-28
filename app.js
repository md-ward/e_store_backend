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


//? MiddleWare  



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); // enable CORS for all routes

// % set Use Routes.......



app.use("/products", productRoute);
//*   /products/get : get all products...
//!   /products/add : add new product ...


app.use('/register', registeringRoute);
//* /register/signUp 
//! /register/login 

app.use('/order', ordersRoute);



// * Connect to data base.........

// CONNECT TO DB 
mongoose.connect('mongodb://127.0.0.1:27017/productDb');

// ? Run  Server......

// LISTEN TO PORT 3000
app.listen(PORT, () => {
  console.log(`server run on http://localhost:${PORT}`);
});