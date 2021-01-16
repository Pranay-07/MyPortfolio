const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var port=process.env.PORT||3000
const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("The server started");
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("client"));
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(User, callback) {
  console.log(User)
  // create reusable transporter object using the default SMTP transport
 var transporter = nodemailer.createTransport({
    host: 'gmail.com',
  service: 'gmail',
  port:465,
                secure: true, // true for 465, false for other ports
                logger: true,
                debug: true,
                secureConnection: false,
  auth: {
    user: 'mailfromportfolio07@gmail.com',
    pass: 'qwerty@123'
  },
  
});

var mailOptions = {
    from: 'mailfromportfolio07@gmail.com',
    to: 'pranay071196@gmail.com',
    subject: 'Connect with you',
    text: `Hi Pranay, I went through your portfolio and wanted to connect with you . My name is - ${User.firstName} ${User.lastName}, mail Id is- ${User.email} contact number is ${User.Contact} Subject is ${User.Subject}`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

// main().catch(console.error);
