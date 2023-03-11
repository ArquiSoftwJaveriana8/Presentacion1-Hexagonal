const dotenv = require("dotenv");

//Replace this line with the sql database you are using
const pg = require("pg");

// ##############
const connect = require("./connection");
// ##############
const connects = connect({ dotenv, pg });
// ##############
const services = Object.freeze({ connects });

module.exports = services;
module.exports = { connects };