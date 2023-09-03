require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connection");
const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());  //CORS errors happen when a webpage makes a request to a different domain than the one that served the page that's why we installed cors to be safe from error(as server and client side running on different port no. 3000-client, 8003-server)
app.use(router);


const port = 8003;
app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);

});

DefaultData();
