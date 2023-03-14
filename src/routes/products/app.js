const express = require("express");
const router = express.Router();
const makeExpressCallback = require("../../express-callback/app");

const route = require("./routes.js");

const { validateAuth } = require("../../middlewares/app"); // basic auth validation
//#########
const routes = route({ router, makeExpressCallback, validateAuth });

//Export routes
const services = Object.freeze({
  routes,
});

module.exports = services;

module.exports = {
  routes,
};

module.exports = router;