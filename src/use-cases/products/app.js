//Get Entities and Business logic
const {
  createProducts,
  patchProducts,
} = require("../../entities/products/app"); // entity

//Get Database queries
const productsDb = require("../../data-access/products/app");
const { encrypt, decrypt } = require("../../functions/app");
// #########

//Get CRUD use cases
const addProduct = require("./insert-product");
const selectProduct = require("./select-product");
const updateProduct = require("./update-product");
const deleteProduct = require("./delete-product");
// #########
//Relate CRUD use cases with Business Logic
const addProducts = addProduct({ productsDb, createProducts });
const selectProducts = selectProduct({ productsDb, decrypt });
const updateProducts = updateProduct({ productsDb, patchProducts });
const deleteProducts = deleteProduct({ productsDb });

// #########
//Export use cases
const services = Object.freeze({
  addProducts,
  selectProducts,
  updateProducts,
  deleteProducts,
});

module.exports = services;

module.exports = {
  addProducts,
  selectProducts,
  updateProducts,
  deleteProducts,
};
