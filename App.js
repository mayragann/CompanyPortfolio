const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const sendgridTransport = require("nodemailer-sendgrid-transport");
const PORT = process.env.PORT || 8000;

require("dotenv").config();

const transport = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendmail", (req, res) => {
  const { name, email, servicetype, message } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Please add your name" });
  }
  if (!email) {
    return res.status(400).json({ error: "Please add your email" });
  }
  if (!servicetype) {
    return res
      .status(400)
      .json({ error: "Please add what service is requested" });
  }
  if (!message) {
    return res.status(400).json({ error: "Please add your message" });
  }

  transport.sendMail({
    to: "mayragann@gmail.com",
    from: "mayragann@gmail.com",
    subject: "Service Request from Customer",
    html: `
            <h4>Customer Details</h4>
            <ul>
            <li>Name: ${name}</li>

            <li>Email: ${email}</li>

            <li>Service Requested: ${servicetype}</li>

            <li>Message: ${message}</li>

            </ul>
        `,
  });
  res.json({ success: "Email has been sent" });
});

app.listen(PORT, (req, res) => {
  console.log("Server Connected");
});

app.get("/test", (req, res) => {
  res.send("Test Node App");
});
