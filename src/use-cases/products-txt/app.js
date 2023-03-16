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
//const selectProduct = require("./select-product");
//const updateProduct = require("./update-product");
//const deleteProduct = require("./delete-product");
// #########
//Relate CRUD use cases with Business Logic
const addProductsTxt = addProductTxt({ productsDb, createProducts });
//const selectProducts = selectProduct({ productsDb, decrypt });
const selectProducts = null;
//const updateProducts = updateProduct({ productsDb, patchProducts });
//const deleteProducts = deleteProduct({ productsDb });

// #########
//Export use cases
const services = Object.freeze({
  addProductsTxt,
  //selectProducts
  selectProducts,
  //updateProducts,
  //deleteProducts,
});

module.exports = services;

module.exports = {
  addProductsTxt,
  selectProducts,
  //updateProducts,
  //deleteProducts,
};
