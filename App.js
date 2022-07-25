const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");

const sendgridTransport = require("nodemailer-sendgrid-transport");
const PORT = process.env.PORT || 8000;

require("dotenv").config();

const transporte = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.post("/sendmail", (req, res) => {
  const { name, email, servicetype, message } = req.body;

  transporte.sendMail({
    to: "mayragann@gmail.com",
    from: "mayragann@gmail.com",
    subject: "Service Request from Customer",
    html: `
            <h4>Customer Details</h4>
            <ul>
            <li>Name:${name}</li>

            <li>Email:${email}</li>

            <li>Service Requested:${servicetype}</li>

            <li>Message:${message}</li>

            </ul>
        `
  })

  res.json({name, email, servicetype, message });

});

app.listen(PORT, (req, res) => {
  console.log("Server Connected");
});

app.get("/test", (req, res) => {
  res.send("Test Node App");
});
