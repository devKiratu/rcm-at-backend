const Employees = require("../db");
const AirtimeAllowances = require("../utils/AirtimeAllowance");
require("dotenv").config();

const credentials = {
  apiKey: process.env.API_KEY,
  username: "sandbox",
};

const africastalking = require("africastalking")(credentials);

const airtime = africastalking.AIRTIME;

exports.sendAirtime = (req, res) => {
  const recipients = [];
  Employees.forEach((e) => {
    let recipient = {
      phoneNumber: e.phoneNumber,
      currencyCode: "KES",
      amount: AirtimeAllowances[e.cadre],
    };
    recipients.push(recipient);
  });

  const options = {
    recipients,
  };

  airtime
    .send(options)
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};
