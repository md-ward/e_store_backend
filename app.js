const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 3000;
require("dotenv/config");
const cors = require('cors');

const productRoute = require('./src/shop/routes/productsRoutes');
const registeringRoute=require('./src/register/routes/signup_route')

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors()); // enable CORS for all routes

app.use("/", productRoute);
app.use('/register',registeringRoute);

// CONNECT TO DB 
mongoose.connect('mongodb://127.0.0.1:27017/productDb');

// LISTEN TO PORT 3000
app.listen(PORT, () => {
  console.log(`server run on http://localhost:${PORT}`);
});