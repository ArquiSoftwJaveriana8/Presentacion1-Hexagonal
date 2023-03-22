//Get Entities and Business logic
const {
  createProducts,
  patchProducts,
} = require("../../entities/products/app"); // entity

//Get Database queries
const productsDb = require("../../data-access/products-txt/app");
const { encrypt, decrypt } = require("../../functions/app");
// #########

//Get CRUD use cases
const addProductTxt = require("./insert-product-txt");

// #########
//Relate CRUD use cases with Business Logic
const addProductsTxt = addProductTxt({ productsDb, createProducts });


// #########
//Export use cases
const services = Object.freeze({
  addProductsTxt,
});

module.exports = services;

module.exports = {
  addProductsTxt,
};
