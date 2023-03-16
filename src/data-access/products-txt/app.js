const { connects } = require("../app");
const models = require("../sequelize/models");
// ######
const query = require("./query");
// ######
const productsDb = query({ connects, models });
// ######

//Export Products database access
module.exports = productsDb;