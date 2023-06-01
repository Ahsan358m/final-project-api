const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
//const multer = require("multer");


const user = require("./controllers/userController");

//app.use(multer({dest:'./uploads/'}).single());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.use("/api/v1/", user);



mongoose.connect(process.env.MONGO_URI).then(
    console.log(`Mongo is connected on the host ${process.env.MONGO_URI}`)
).catch((error) => {
    console.error(error);
});



app.listen(process.env.PORT, "0.0.0.0" ,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
});


