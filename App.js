

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const sendgridTransport = require('nodemailer-sendgrid-transport');
const PORT = process.env.PORT || 8000



app.listen(PORT,(req,res) => {
    console.log("Server Connected")
})

app.get("/test",(req,res) => {
    res.send("Test Node App")
})