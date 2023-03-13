//Get Entities and Business logic
const {
  createProducts,
  patchProducts,
} = require("../../entities/products/app"); // entity

//Get Database queries
const productsDb = require("../../data-access/products/app");
const { encrypt, decrypt } = require("../../functions/app");
// #########

//Get CRUD functions
const addProduct = require("./insert-product");
const selectProduct = require("./select-product");
const updateProduct = require("./update-product");
const deleteProduct = require("./delete-product");
// #########
//Relate CRUD functions with Business Logic
const addProducts = addProduct({ createProducts, productsDb });
const selectProducts = selectProduct({ productsDb, decrypt });
const updateProducts = updateProducts({ productsDb, patchProducts });
const deleteProducts = deleteProducts({ productsDb });

// #########
//Export services
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
