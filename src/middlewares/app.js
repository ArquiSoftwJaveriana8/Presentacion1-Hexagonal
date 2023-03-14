const auth = require("basic-auth");
const dotenv = require("dotenv");
// #############
const myAuth = require("./basic-auth.js");
// #############
const validateAuth = myAuth({ auth, dotenv });
// #############

//Export controllers for auth
const services = Object.freeze({
  validateAuth,
});

module.exports = services;
module.exports = {
  validateAuth,
};