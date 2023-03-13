// Builds the services for the products entity
// Business logic for the products entity

const { encrypt, decrypt } = require("../../functions/app");
// ########
//Import business logic access
const createProduct = require("./create-product");
const patchProduct = require("./patch-product");
// ########

//Link business logic with encryption function
const createProducts = createProduct({ encrypt });
const patchProducts = patchProduct({ encrypt });
// ########
const services = Object.freeze({ createProducts, patchProducts });

//Export business logic
module.exports = services;
module.exports = { createProducts, patchProducts };