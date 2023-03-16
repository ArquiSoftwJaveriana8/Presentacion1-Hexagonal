const express = require("express");
const router = express.Router();
const makeExpressCallbackXML = require("../../express-callback/xml.js");

const route = require("./routes.js");

const { validateAuth } = require("../../middlewares/app"); // basic auth validation
//#########
const routes = route({ router, makeExpressCallbackXML, validateAuth });

//Export routes
const services = Object.freeze({
  routes,
});

module.exports = services;

module.exports = {
  routes,
};

module.exports = router;