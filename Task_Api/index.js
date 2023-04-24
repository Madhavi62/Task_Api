
const express = require("express");
const mongoose = require("mongoose")
const dotenv= require("dotenv")
const cors = require("cors")
const app =express()

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useUnifiedTopology : true, useNewUrlParser:true
    },)
    .then(()=>console.log("connected to DB"))
    .catch((err)=>{console.log(err)})

const productRoutes =require("./routes/product")
app.use(express.json())
app.use(cors())
app.use("/api/products", productRoutes)
app.listen(4000 ,()=>console.log("server up and running at port 4000"))