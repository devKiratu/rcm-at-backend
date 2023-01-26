const Cadre = require("./utils/Cadre");
require("dotenv").config();

const Employees = [
  {
    name: "christopher",
    cadre: Cadre.SENIOR,
    phoneNumber: process.env.PHONE1,
  },
  {
    name: "christopher",
    cadre: Cadre.MID,
    phoneNumber: process.env.PHONE2,
  },
  {
    name: "christopher",
    cadre: Cadre.ENTRY,
    phoneNumber: process.env.PHONE3,
  },
];

module.exports = Employees;
