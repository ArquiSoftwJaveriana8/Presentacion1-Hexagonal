// Builds the services for the products entity
// Business logic for the products entity

const { encrypt, decrypt } = require("../../functions/app");
// ########
//Functions
const createProduct = require("./create-product");
const patchProduct = require("./patch-product");
// ########

//Services
const createProducts = createProduct({ encrypt });
const patchProducts = patchProduct({ encrypt });
// ########
const services = Object.freeze({ createProducts, patchProducts });

module.exports = services;
module.exports = { createProducts, patchProducts };